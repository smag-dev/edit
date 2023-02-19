import express from "express";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter";
import userRouter from "./routers/userRouter";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI: string = String(process.env.MONGO_URI);
const app = express();
/*interpreta o json que vem no body dos pedidos*/
app.use(express.json());
app.use(fileUpload());
app.use(express.static("static"));

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
app.use(userRouter);
