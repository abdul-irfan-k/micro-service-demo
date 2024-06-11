import { IUserRepository } from "@lib/app/repository/user";
import {
  IUpdatePasswordWithTokenUseCase,
  IUpdatePasswordWithTokenUseCaseArgs,
} from "../interface/user";
import { ITokenRepository } from "@lib/app/repository/token";
import { BadRequestError } from "@lib/util/bad-request-error";

export class UpdatePasswordWithTokenUseCase
  implements IUpdatePasswordWithTokenUseCase
{
  constructor(
    private userRepository: IUserRepository,
    private tokenRepository: ITokenRepository
  ) {}
  async execute(
    args: IUpdatePasswordWithTokenUseCaseArgs
  ): Promise<{ isUpdated: boolean }> {
    const { _id, token, newPassword } = args;
    const tokenDetails = await this.tokenRepository.getTokenByUserId(_id);
    if (tokenDetails == null)
      throw new BadRequestError({ code: 400, message: "token not found" });

    const isValidToken = await tokenDetails.checkIsValidToken(token);
    if (!isValidToken)
      throw new BadRequestError({ code: 400, message: "token is invalid" });

    const userDetails = await this.userRepository.updateUser(_id, {
      password: newPassword,
    });
    if (userDetails == null)
      return {isUpdated:false}

    return { isUpdated: true };
  }
}
