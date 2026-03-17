import "dotenv/config";

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createApp } from "../src/app";
import { connectMongo } from "../src/db";

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
  await ensureMongoConnected();
  return app(req, res);
}
