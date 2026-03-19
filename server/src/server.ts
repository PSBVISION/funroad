import "dotenv/config";

import { createApp } from "./app.js";
import { connectMongo } from "./db.js";

async function main() {
  await connectMongo();
  const app = createApp();

  app.listen(process.env.PORT, () => {
    console.log("api is now running");
  });
}

main().catch((err) => {
  console.error("boot failed", err);
  process.exit(1);
});
