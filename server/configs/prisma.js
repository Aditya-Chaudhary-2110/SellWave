import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

// Configure Neon for serverless
neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true; // Required for Vercel Edge / serverless

const connectionString = process.env.DATABASE_URL;

// Create Neon adapter
const adapter = new PrismaNeon({ connectionString });

// Prisma singleton for serverless
let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient({ adapter });
}

prisma = global.prisma;

export default prisma;
