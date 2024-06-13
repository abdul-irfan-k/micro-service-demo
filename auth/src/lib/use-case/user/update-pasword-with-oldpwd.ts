import { IUserRepository } from "@lib/app/repository";
import {
  IUpdatePwdWithOldPwdUseCase,
  IUpdatePwdWithOldPwdUseCaseArgs,
} from "../interface/user";
import { BadRequestError } from "@lib/util/bad-request-error";

export class UpdatePasswordWithOldPwdUseCase implements IUpdatePwdWithOldPwdUseCase {
  constructor(private userRepoistory: IUserRepository) {}
  async execute(
    args: IUpdatePwdWithOldPwdUseCaseArgs
  ): Promise<{ isUpdated: boolean }> {
    const { _id, oldPassword, newPassword } = args;
    const userDetails = await this.userRepoistory.getUser({ _id });
    if (userDetails == null)
      throw new BadRequestError({ code: 400, message: "invalid user _id" });

    const isValidOldPassword = await userDetails.checkIsCorrectPassword(oldPassword);
    if (!isValidOldPassword)
      throw new BadRequestError({ code: 400, message: "invalid old password" });

    const updatedUserDetails = await this.userRepoistory.updateUser(_id, {
      password: newPassword,
    });
    if (updatedUserDetails == null)
      throw new BadRequestError({
        code: 400,
        message: "user password update error",
      });
    console.log("update user details",updatedUserDetails)
    return { isUpdated: true };
  }
}
