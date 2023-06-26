import express from "express";
import morgan from "morgan";
import * as db from "./config/db";
import dotenv from "dotenv";
import { categoryRouter } from "./router/categoryRouter";

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

const app = express();

db.connectDB;

app.use(express.json());
if (process.env.MODE_ENV == "dev") {
  app.use(morgan("dev"));
}

app.use("/v1/category", categoryRouter);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
