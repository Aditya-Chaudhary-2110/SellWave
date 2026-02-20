import express from "express";
import "dotenv/config";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import listingRouter from "./routes/listingRoutes.js";
import chatRouter from "./routes/chatRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import { stripeWebhook } from "./controllers/stripeWebhook.js";

const app = express();
const PORT = process.env.PORT || 3000;

/* =====================================================
   ✅ STRIPE WEBHOOK ROUTE (MUST BE BEFORE express.json)
===================================================== */

app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

/* =====================================================
   NORMAL MIDDLEWARE
===================================================== */

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

/* =====================================================
   ROUTES
===================================================== */

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/listing", listingRouter);
app.use("/api/chat", chatRouter);
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log("Server is live on port", PORT);
});

export default app;
