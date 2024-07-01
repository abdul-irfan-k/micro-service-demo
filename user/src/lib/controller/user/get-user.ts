import { NextFunction, Request, Response } from "express";
import { IGetUserUseCase } from "../../use-cases/interface";
import { validationResult } from "express-validator";
import { BadRequestError } from "@/lib/util/bad-request-error";

export class GetUserController {
  constructor(private getUserUseCase: IGetUserUseCase) {}

  async processRequest(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }
    const { _id: userId } = req.user;
    console.log("req user",req.user);
    const user = await this.getUserUseCase.execute({
      userId,
    });
    if (user == null)
      throw new BadRequestError({ code: 400, message: "User not found" });
    return res.status(200).json(user);
  }
}
