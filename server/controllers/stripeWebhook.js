import Stripe from "stripe";
import prisma from "../configs/prisma.js";
import { inngest } from "../inngest/index.js";

export const stripeWebhook = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    const signature = req.headers["stripe-signature"];

    event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
  } catch (err) {
    console.log("Webhook signature verification failed:", err.message);
    return res.sendStatus(400);
  }

  try {
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object;

      const sessionList = await stripe.checkout.sessions.list({
        payment_intent: paymentIntent.id,
      });

      const session = sessionList.data[0];
      if (!session) {
        return res.json({ received: true });
      }

      const { transactionId, appId } = session.metadata || {};

      if (appId === "sellWave" && transactionId) {
        const transaction = await prisma.transaction.update({
          where: { id: transactionId },
          data: { isPaid: true },
        });

        await prisma.listing.update({
          where: { id: transaction.listingId },
          data: { status: "sold" },
        });

        await prisma.user.update({
          where: { id: transaction.ownerId },
          data: { earned: { increment: transaction.amount } },
        });

        await inngest.send({
          name: "app/purchase",
          data: { transaction },
        });
      }
    }

    res.json({ received: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    res.status(500).send("Internal Server Error");
  }
};
