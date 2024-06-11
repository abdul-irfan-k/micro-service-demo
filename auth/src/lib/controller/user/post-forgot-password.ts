import { natsWrapper } from "@/nats-wrapper";
import { forgotPasswordPublisher } from "@event/publisher/forgot-password";
import {
  IForgotPasswordUseCase,
  IGetUserUseCase,
} from "@lib/use-case/interface/user";
import { BadRequestError } from "@lib/util/bad-request-error";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

export class PostForgotPassword {
  constructor(
    private forgotPasswordUseCase: IForgotPasswordUseCase,
    private getUserUseCase: IGetUserUseCase
  ) {}

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { email } = req.body;

    const userDetails = await this.getUserUseCase.execute({ email });
    if (userDetails == null)
      throw new BadRequestError({ code: 400, message: "user not found" });
    const { token, userId } = await this.forgotPasswordUseCase.execute({
      email: userDetails.email,
      userId: userDetails._id,
    });

    //@ts-ignore
    new forgotPasswordPublisher(natsWrapper.client).publish({
      token,
      userId,
      email,
    });
    return res.status(200).json({ isSendedEmail: true });
  }
}
