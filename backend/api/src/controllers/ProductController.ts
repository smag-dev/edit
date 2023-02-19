import { Request, Response } from "express";
import ProductService from "../services/ProductService";
import { validationResult } from "express-validator";

class ProductController {
  async create(req: Request, res: Response) {
    try {
      /* apanhar erro das  validações */
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ "Validation errors.": errors.array() });
      } else {
        /* verifica se existe ficheiro/imagem com um ternario passando null caso não exista*/
        const image = req.files?.image;
        const product = await ProductService.create(req.body, image);
        res.status(201).json(product);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          message: "Falhou a criação do produto.",
          error: error.message,
        });
      }
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const products = await ProductService.getAll();
      res.status(200).json(products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          message: "Falhou na obtenção de produtos.",
          error: error.message,
        });
      }
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductService.getOne(id);
      res.status(200).json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          message: "Falhou na obtenção do produto.",
          error: error.message,
        });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      /* verifica se existe ficheiro/imagem com um ternario passando null caso não exista*/
      const image = req.files?.image;
      const product = await ProductService.update(id, req.body, image);
      res.status(200).json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          message: "Falhou na atualização do produto.",
          error: error.message,
        });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductService.delete(id);
      res.status(200).json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Falhou apagar o produto.", error: error.message });
      }
    }
  }
}

export default new ProductController();
