import express from "express";
import dotenv from 'dotenv';
import { Request, Response } from "express";

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

const appRouter = express.Router();

appRouter.get('/products', (req : Request, res : Response) => {
    console.log("primeiro pedido get products");
    console.log(req.query)
    res.status(200).json('primeiro pedido get products')
})

appRouter.post('/products', (req : Request, res : Response) => {
    console.log("primeiro pedido post products");
    console.log(req.query)
    res.status(200).json('primeiro pedido post products')
})

appRouter.put('/products/', (req : Request, res : Response) => {
    console.log("primeiro pedido put products");
    console.log(req.query)
    res.status(200).json('primeiro pedido put products')
})

appRouter.delete('/products/', (req : Request, res : Response) => {
    console.log("primeiro pedido delete products");
    console.log(req.query)
    res.status(200).json('primeiro pedido delete products')
})

app.use(appRouter);
