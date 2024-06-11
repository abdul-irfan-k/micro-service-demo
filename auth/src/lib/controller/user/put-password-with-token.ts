import { natsWrapper } from "@/nats-wrapper";
import { passwordResetSuccess } from "@event/publisher/password-reset-success";
import {
  IGetUserUseCase,
  IUpdatePasswordWithTokenUseCase,
} from "@lib/use-case/interface/user";
import { BadRequestError } from "@lib/util/bad-request-error";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

export class PutPasswordWithToken {
  constructor(
    private updatePasswordWithTokenUseCase: IUpdatePasswordWithTokenUseCase,
    private getUserUseCase: IGetUserUseCase
  ) {}

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { newPassword, token, _id, email } = req.body;
    const userDetail = await this.getUserUseCase.execute({ _id });
    if (userDetail == null)
      throw new BadRequestError({ code: 400, message: "invalid user id" });
    const { isUpdated:isUpdatedPassword } = await this.updatePasswordWithTokenUseCase.execute({
      _id,
      email,
      newPassword,
      token,
    });
    if (!isUpdatedPassword)
      throw new BadRequestError({ code: 400, message: "password not updated" });

    //@ts-ignore
    new passwordResetSuccess(natsWrapper.client).publish({
      email:userDetail.email,
      name:userDetail.name,
    });
    return res.status(200).json({ isUpdatedPassword });
  }
}
