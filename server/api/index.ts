import "dotenv/config";

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createApp } from "../src/app.js";
import { connectMongo } from "../src/db.js";

const app = createApp();

let mongoPromise: Promise<void> | null = null;

async function ensureMongoConnected() {
  if (!mongoPromise) {
    mongoPromise = connectMongo().catch((err) => {
      mongoPromise = null;
      throw err;
    });
  }

  await mongoPromise;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Preflight should not depend on database availability.
  if (req.method === "OPTIONS") {
    return app(req, res);
  }

  await ensureMongoConnected();
  return app(req, res);
}
