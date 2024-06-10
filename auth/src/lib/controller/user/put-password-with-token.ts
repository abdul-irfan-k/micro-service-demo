import {
  IUpdatePasswordWithTokenUseCase,
} from "@lib/use-case/interface/user";
import { BadRequestError } from "@lib/util/bad-request-error";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

export class PutPasswordWithToken {
  constructor(
    private updatePasswordWithTokenUseCase: IUpdatePasswordWithTokenUseCase
  ) {}

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { password, token ,_id,email} = req.body;

    const isUpdatedPassword = await this.updatePasswordWithTokenUseCase.execute(
      { _id, email, password, token }
    );
    if (!isUpdatedPassword)
      throw new BadRequestError({ code: 400, message: "password not updated" });

    return res.status(200).json({ isUpdatedPassword });
  }
}
