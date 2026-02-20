import Stripe from "stripe";
import prisma from "../configs/prisma.js";
import { inngest } from "../inngest/index.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhook = async (req, res) => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    const signature = req.headers["stripe-signature"];

    event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
  } catch (err) {
    console.log("❌ Webhook signature verification failed:", err.message);
    return res.sendStatus(400);
  }

  try {
    // ✅ Correct event for Stripe Checkout payments
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const { transactionId, appId } = session.metadata || {};

      // safety check
      if (!transactionId || appId !== "sellWave") {
        console.log("⚠ Invalid metadata");
        return res.json({ received: true });
      }

      // prevent duplicate processing (VERY IMPORTANT)
      const existingTransaction = await prisma.transaction.findUnique({
        where: { id: transactionId },
      });

      if (!existingTransaction) {
        console.log("❌ Transaction not found:", transactionId);
        return res.json({ received: true });
      }

      if (existingTransaction.isPaid) {
        console.log("⚠ Already processed:", transactionId);
        return res.json({ received: true });
      }

      // ✅ mark paid
      const transaction = await prisma.transaction.update({
        where: { id: transactionId },
        data: { isPaid: true },
      });

      // ✅ mark listing sold
      await prisma.listing.update({
        where: { id: transaction.listingId },
        data: { status: "sold" },
      });

      // ✅ add seller earnings
      await prisma.user.update({
        where: { id: transaction.ownerId },
        data: {
          earned: { increment: transaction.amount },
        },
      });

      // ✅ trigger post-purchase workflow
      await inngest.send({
        name: "app/purchase",
        data: { transaction },
      });

      console.log("✅ Payment processed:", transactionId);
    }

    res.json({ received: true });
  } catch (error) {
    console.error("❌ Webhook processing error:", error);
    res.status(500).send("Internal Server Error");
  }
};
