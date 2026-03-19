import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth.js";
import { creatorProductRouter } from "./routes/creatorProduct.js";
import { creatorImportRouter } from "./routes/creatorImport.js";
import { publicProductsRouter } from "./routes/publicProducts.js";
import { checkoutRouter } from "./routes/checkout.js";
import { creatorSalesRouter } from "./routes/creatorSales.js";
import { libraryRouter } from "./routes/library.js";

const defaultAllowedOrigins = [
  "https://funroad-tan.vercel.app",
  "https://funroad.psbvision.engineer",
];

function resolveAllowedOrigins() {
  const configuredOrigins = (process.env.FRONTEND_ORIGIN ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return configuredOrigins.length > 0
    ? configuredOrigins
    : defaultAllowedOrigins;
}

export function createApp() {
  const app = express();
  const allowedOrigins = resolveAllowedOrigins();
  const allowVercelPreview = process.env.ALLOW_VERCEL_PREVIEW === "true";

  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        if (/^https:\/\/[a-z0-9-]+\.psbvision\.engineer$/i.test(origin)) {
          return callback(null, true);
        }
        if (
          allowVercelPreview &&
          /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin)
        ) {
          return callback(null, true);
        }

        return callback(new Error("Not allowed by CORS"));
      },
      credentials: true,
      optionsSuccessStatus: 204,
    })
  );

  app.use(express.json({}));
  app.use(cookieParser());

  // all the routes placeholder
  app.use("/api/auth", authRouter);
  app.use("/api/creator/products", creatorProductRouter);
  app.use("/api/creator/products", creatorImportRouter);
  app.use("/api/creator/sales", creatorSalesRouter);
  app.use("/api/products", publicProductsRouter);
  app.use("/api/checkout", checkoutRouter);
  app.use("/api/library", libraryRouter);

  return app;
}
