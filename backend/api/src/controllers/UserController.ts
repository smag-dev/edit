import { Request, Response } from "express";


class UserController {
    async create(req : Request, res : Response) {
        console.log("create UserController")
        res.status(200).json("create UserController");
    }

    async getAll(req : Request, res : Response)  {
        console.log("getAll UserController")
        res.status(200).json("getAll UserController");
    }

    async getOne(req : Request, res : Response)  {
        console.log("getOne UserController")
        res.status(201).json("getOne UserController");
    }

    async login(req : Request, res : Response) {
        console.log("login UserController")
        res.status(201).json("login UserController");
    }

}

export default new UserController()