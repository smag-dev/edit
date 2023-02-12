import { Router } from "express";
import ProductController from "../Product/ProductController";

const router = Router();

router.get('/products', ProductController.getAll)

router.post('/products', ProductController.create)

router.put('/products/', ProductController.update)

router.delete('/products/', ProductController.delete)

export default router;