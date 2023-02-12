import { Request, Response } from "express";

class ProductController {
    create(req : Request, res : Response) {
        console.log("primeiro pedido post products");
        console.log(req.query)
        res.status(200).json('primeiro pedido post products')
    }

    getAll(req : Request, res : Response)  {
        console.log("primeiro pedido get products");
        console.log(req.query)
        res.status(200).json('primeiro pedido get products')
    }

    update(req : Request, res : Response) {
        console.log("primeiro pedido put products");
        console.log(req.query)
        res.status(200).json('primeiro pedido put products')
    }

    delete(req : Request, res : Response){
        console.log("primeiro pedido delete products");
        console.log(req.query)
        res.status(200).json('primeiro pedido delete products')
    }
}

export default new ProductController()