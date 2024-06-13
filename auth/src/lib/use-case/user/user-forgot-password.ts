import { IUserRepository } from "@lib/app/repository/user";
import {
  IForgotPasswordUseCase,
  IForgotPasswordUseCaseArgs,
} from "../interface/user";
import { ITokenRepository } from "@lib/app/repository/token";
import { BadRequestError } from "@lib/util/bad-request-error";
import crypto from "crypto";

export class ForgotPasswordUseCase implements IForgotPasswordUseCase {
  constructor(
    private userRepository: IUserRepository,
    private tokenRepository: ITokenRepository
  ) {}
  async execute(args: IForgotPasswordUseCaseArgs) {
    const { email, userId } = args;
    await this.tokenRepository.removeToken(userId);
    const token = crypto.randomBytes(32).toString("hex");
    const tokenDetails = await this.tokenRepository.createToken({
      token,
      userId: userId,
    });
    if (tokenDetails == null)
      throw new BadRequestError({ code: 400, message: "token creation error" });

    return tokenDetails;
  }
}
