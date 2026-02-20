import Stripe from "stripe";
import prisma from "../configs/prisma.js";
import { inngest } from "../inngest/index.js";

export const stripeWebhook = async (request, response) => {
  const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = request.headers["stripe-signature"];
    try {
      event = stripeInstance.webhooks.constructEvent(
        request.body,
        signature,
        endpointSecret,
      );
    } catch (err) {
      console.log(`⚠️ Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        const sessionList = await stripeInstance.checkout.sessions.list({
          payment_intent: paymentIntent.id,
        });

        const session = sessionList.data[0];

        const { transactionId, appId } = session.metadata;

        if (appId === "sellWave" && transactionId) {
          const transaction = await prisma.transaction.update({
            where: { id: transactionId },
            data: { isPaid: true },
          });

          // Send New Credentails to the buyers using the email address
          await inngest.send({
            name: "app/purchase",
            data: { transaction },
          });

          // Mark the listing as sold
          await prisma.listing.update({
            where: { id: transaction.listingId },
            data: { Status: "sold" },
          });

          // add the amount to the user's earned balance

          await prisma.user.update({
            where: { id: transaction.ownerId },
            data: { earned: { increment: transaction.amount } },
          });
        }

        break;
      case "payment_method.attached":
        const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error("Webhook processing error:", error);
    response.status(500).send("Internal Server Error");
  }
};
