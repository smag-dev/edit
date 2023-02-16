import { Request, Response } from "express";
import UserService from "../services/UserService";


class UserController {
    /* registo do user  por isso vai criar  user*/
    async create(req : Request, res : Response) {
        try {
            const user = await UserService.create(req.body)
            res.status(201).json(user);
        } catch (error) {
            res.status(500).send({ message: "Falhou a criação do user.", error });
        }
        
    }
    /* login do user   */
    async login(req : Request, res : Response) {
        try {
            const user = await UserService.login(req.body)
            res.status(200).json(user);
        } catch (error) {
            res.status(500).send({ message: "Falhou o login.", error })
        } 
    }
    /* obter todos os users   */
    async getAll(req : Request, res : Response)  {
        try {
            const users = await UserService.getAll()
            res.status(200).json(users);
        } catch (error) {
            res.status(500).send({ message: "Falhou a obtenção dos users.", error })
        }
        
    }
    /* obter user indicado   */
    async getOne(req : Request, res : Response)  {
        try {
            const {id} = req.params;
            const user = await UserService.getOne(id)
            res.status(201).json(user);
        } catch (error) {
            res.status(500).send({ message: "Falhou a obtenção do user.", error })
        }
    }
}

export default new UserController()