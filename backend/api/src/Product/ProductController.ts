import { Request, Response } from "express";

class ProductController {
    create(req : Request, res : Response) {
        console.log(req.body)
        console.log(req.params);
        res.status(200).json('primeiro pedido post products')
    }

    getAll(req : Request, res : Response)  {
        console.log(req.params);
        console.log(req.body)
        res.status(200).json('primeiro pedido get products')
    }

    getOne(req : Request, res : Response)  {
        const { id } = req.params;
        console.log(id);
        console.log(req.params);
        console.log(req.body)
        res.status(200).json('primeiro pedido get products')
    }

    update(req : Request, res : Response) {
        const { id } = req.params;
        console.log(id);
        console.log(req.params);
        console.log(req.body)
        res.status(200).json('primeiro pedido put products')
    }

    delete(req : Request, res : Response){
        const { id } = req.params;
        console.log(id);
        console.log(req.params);
        console.log(req.body)
        res.status(200).json('primeiro pedido delete products')
    }
}

export default new ProductController()