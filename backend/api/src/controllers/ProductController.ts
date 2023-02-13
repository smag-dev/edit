import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
    async create(req : Request, res : Response) {
        try {
            const product = await ProductService.create(req.body);
            res.status(201).send(product)
        }catch (error) {
            res.status(500).send({ message: "Falhou a criação do produto.", error });
        }
    }

    async getAll(req : Request, res : Response)  {
        try{
            const products = await ProductService.getAll();
            res.status(201).send(products)
        }catch(error){
            res.status(500).send({ message: "Falhou na obtenção de produtos.", error });      
        }
    }

    async getOne(req : Request, res : Response)  {
        try{
            const { id } = req.params;
            const product = await ProductService.getOne(id);
            res.status(200).send(product)
        }catch(error){
            res.status(500).send({ message: "Falhou na obtenção do produto.", error })
        }
    }

    async update(req : Request, res : Response) {
        try{
            const { id } = req.params;
            const product = await ProductService.update(id, req.body);
            res.status(200).send(product)
        }catch(error){
            res.status(500).send({ message: "Falhou na atualização do produto.", error })
        }
    }

    async delete(req : Request, res : Response){
        try{
            const { id } = req.params;
            const product = await ProductService.delete(id);
            res.status(200).send(product)
        }catch(error){
            res.status(500).send({ message: "Falhou apagar o produto.", error });
        }
    }
}

export default new ProductController()