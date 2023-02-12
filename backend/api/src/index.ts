import express from "express";
import dotenv from 'dotenv';
import productRouter from "./Router/productRouter";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())

const startApp = async () => {
    try {
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
