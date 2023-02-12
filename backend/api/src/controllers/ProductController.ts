import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
    create(req : Request, res : Response) {
        try {
            const product = ProductService.create(req.body);
            res.status(201).send(product)
        }catch (error) {
            res.status(500).send({ message: "Falhou a criação do produto.", error });
        }
    }

    getAll(req : Request, res : Response)  {
        try{
            const products = ProductService.getAll();
            res.status(201).send(products)
        }catch(error){
            res.status(500).send({ message: "Falhou na obtenção de produtos.", error });      
        }
    }

    getOne(req : Request, res : Response)  {
        try{
            const { id } = req.params;
            const product = ProductService.getOne(id);
            res.status(200).send(product)
        }catch(error){
            res.status(500).send({ message: "Falhou na obtenção do produto.", error })
        }
    }

    update(req : Request, res : Response) {
        try{
            const { id } = req.params;
            const product = ProductService.update(id, req.body);
            res.status(200).send(product)
        }catch(error){
            res.status(500).send({ message: "Falhou na atualização do produto.", error })
        }
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