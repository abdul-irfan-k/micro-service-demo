import { IUpdatePwdWithOldPwdUseCase } from "@lib/use-case/interface/user";
import { BadRequestError } from "@lib/util/bad-request-error";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

export class PutPasswordWithOldPwd {
  constructor(
    private updatePasswordWithOldPwdUseCase: IUpdatePwdWithOldPwdUseCase
  ) {}

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { _id, email } = req.user;
    const { oldPassword, newPassword, newComfirmPassword } = req.body;

    const isUpdatedPassword =
      await this.updatePasswordWithOldPwdUseCase.execute({
        _id,
        email,
        newComfirmPassword,
        newPassword,
        oldPassword,
      });
    if (!isUpdatedPassword)
      throw new BadRequestError({ code: 400, message: "password not updated" });

    return res.status(200).json({ isUpdatedPassword });
  }
}
