import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth";
import { creatorProductRouter } from "./routes/creatorProduct";
import { creatorImportRouter } from "./routes/creatorImport";
import { publicProductsRouter } from "./routes/publicProducts";
import { checkoutRouter } from "./routes/checkout";
import { creatorSalesRouter } from "./routes/creatorSales";
import { libraryRouter } from "./routes/library";

function resolveAllowedOrigins() {
  return (process.env.FRONTEND_ORIGIN ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
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
