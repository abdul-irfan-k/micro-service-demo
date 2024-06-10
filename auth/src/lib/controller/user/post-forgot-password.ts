import { natsWrapper } from "@/nats-wrapper";
import { forgotPasswordPublisher } from "@event/publisher/forgot-password";
import { IForgotPasswordUseCase } from "@lib/use-case/interface/user";
import { BadRequestError } from "@lib/util/bad-request-error";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

export class PostForgotPassword {
  constructor(private forgotPasswordUseCase: IForgotPasswordUseCase) {}

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { email } = req.body;
    const { token, userId } = await this.forgotPasswordUseCase.execute({
      email,
    });

    //@ts-ignore
    new forgotPasswordPublisher(natsWrapper.client).publish({ token, userId });
    return res.status(200).json({ isSendedEmail: true });
  }
}
