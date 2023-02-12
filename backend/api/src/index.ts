import express from "express";
import dotenv from 'dotenv';
import productRouter from "./routers/productRouter";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI: string = String(process.env.MONGO_URI);
const app = express();
app.use(express.json())

const startApp = async () => {
    try {
      mongoose.set("strictQuery", true);
      await mongoose.connect(MONGO_URI);
      console.log("Successefully connected to db");
      app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
};

startApp();

app.use(productRouter);
