import { NextFunction, Request, Response } from "express";
import { ICreateUserUseCase } from "../../use-cases/interface";
import { validationResult } from "express-validator";
import { BadRequestError } from "@/lib/util/bad-request-error";

export class PostUserController {
  constructor(private createUserUseCase: ICreateUserUseCase) {}
  async processRequest(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const user = await this.createUserUseCase.execute(req.body);
    if (user == null) throw new BadRequestError({ code: 400 });
    else return res.status(200).json(user);
  }
}
