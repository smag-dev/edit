import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
    create(req : Request, res : Response) {
        //console.log(req.body)
        //console.log(req.params);
        const product = ProductService.create(req.body);
        res.status(200).json('primeiro pedido post products')
    }

    getAll(req : Request, res : Response)  {
        //console.log(req.params);
        //console.log(req.body)
        const products = ProductService.getAll();
        res.status(200).json('primeiro pedido get products')
    }

    getOne(req : Request, res : Response)  {
        const { id } = req.params;
        //console.log(id);
        //console.log(req.params);
        //console.log(req.body)
        const product = ProductService.getOne(id);
        res.status(200).json('primeiro pedido get products')
    }

    update(req : Request, res : Response) {
        const { id } = req.params;
        //console.log(id);
        //console.log(req.params);
        //console.log(req.body)
        const product = ProductService.update(id, req.body);
        res.status(200).json('primeiro pedido put products')
    }

    delete(req : Request, res : Response){
        const { id } = req.params;
        //console.log(id);
        //console.log(req.params);
        //console.log(req.body)
        const product = ProductService.delete(id);
        res.status(200).json('primeiro pedido delete products')
    }
}

export default new ProductController()