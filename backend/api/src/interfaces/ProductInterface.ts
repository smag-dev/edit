import mongoose from "mongoose";

 interface IProduct extends mongoose.Document {
    name: string;
    description: string;
    price: number;
    category: string;
    quantity: number;
  }

  export {IProduct}