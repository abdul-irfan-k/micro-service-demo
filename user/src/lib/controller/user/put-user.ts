import { NextFunction, Request, Response } from "express";
import { IUpdateUserUseCase } from "../../use-cases/interface";
import { validationResult } from "express-validator";
import { BadRequestError } from "@/lib/util/bad-request-error";

export class PutUserController {
  sample = "jello";
  constructor(private updateUserUseCase: IUpdateUserUseCase) {
    // this.processRequest = this.processRequest.bind(this)
  }
  processRequest = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }
    const id = req.params.id;
    const _id = id.toString();
    console.log("sample", _id, this);
    const updatedUser = await this.updateUserUseCase.execute({
      _id,
      ...req.body,
    });
    if (!updatedUser) throw new BadRequestError({ code: 400 });
    return res.status(200).json(updatedUser);
  };
}
