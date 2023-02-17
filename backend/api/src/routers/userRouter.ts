import { Router } from "express";
import UserController from "../controllers/UserController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

/* rotas para os users */
/* rota para user registar */
router.post('/users/register', UserController.create)
/* rota para user fazer login */
router.post('/users/login', UserController.login)
/* rota para obter users */
router.get('/users/', authMiddleware, UserController.getAll)

/* rota para obter um user  */
router.get('/users/:id', authMiddleware, UserController.getOne)

export default router;