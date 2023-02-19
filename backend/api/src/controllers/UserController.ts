import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";
import { validationResult } from "express-validator";

class UserController {
  /* registo do user  por isso vai criar  user*/
  async create(req: Request, res: Response) {
    try {
      /* apanhar erro das  validações */
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ "Validation errors.": errors.array() });
      } else {
        const user = await UserService.create(req.body);
        res.status(201).json(user);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Falhou a criação do user.", error: error.message });
      }
    }
  }
  /* login do user   */
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      /* apanhar erro das  validações */
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        next(res.status(400).json({ "Validation errors.": errors.array() }));
      } else {
        const user = await UserService.login(req.body);
        res.status(200).json(user);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: "falhou login", error: error.message });
      }
    }
  }
  /* obter todos os users   */
  async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          message: "Falhou a obtenção dos users.",
          error: error.message,
        });
      }
    }
  }
  /* obter user indicado   */
  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.getOne(id);
      res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          message: "Falhou a obtenção do user.",
          error: error.message,
        });
      }
    }
  }
}

export default new UserController();
