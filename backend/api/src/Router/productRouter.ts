import { Router, Request, Response } from "express";

const router = Router();

router.get('/products', (req : Request, res : Response) => {
    console.log("primeiro pedido get products");
    console.log(req.query)
    res.status(200).json('primeiro pedido get products')
})

router.post('/products', (req : Request, res : Response) => {
    console.log("primeiro pedido post products");
    console.log(req.query)
    res.status(200).json('primeiro pedido post products')
})

router.put('/products/', (req : Request, res : Response) => {
    console.log("primeiro pedido put products");
    console.log(req.query)
    res.status(200).json('primeiro pedido put products')
})

router.delete('/products/', (req : Request, res : Response) => {
    console.log("primeiro pedido delete products");
    console.log(req.query)
    res.status(200).json('primeiro pedido delete products')
})

export default router;