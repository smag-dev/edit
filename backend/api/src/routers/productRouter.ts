import { Router } from "express";
import ProductController from "../controllers/ProductController";

const router = Router();

router.post('/products', ProductController.create)

router.get('/products', ProductController.getAll)

router.get('/products/:id', ProductController.getOne)

router.put('/products/:id', ProductController.update)

router.delete('/products/:id', ProductController.delete)

export default router;