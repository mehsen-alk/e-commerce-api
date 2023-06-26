import { log } from "console";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "config.env" });

export const connectDB = mongoose
  .connect(process.env.MONGODB_URI!)
  .then((v) => {
    log(`database connected: ${v}`);
  })
  .catch((err) => {
    log(`database error: ${err}`);
    process.exit(1);
  });
