import { tokenEntity } from "@lib/entities";

export interface IForgotPasswordUseCaseArgs {
  email: string;
}

export interface IUpdatePasswordWithTokenUseCaseArgs {
  email: string;
  _id: string;
  password: string;
  token: string;
}

export interface IUpdatePwdWithOldPwdUseCaseArgs {
  email: string;
  _id: string;
  oldPassword: string;
  newPassword: string;
  newComfirmPassword: string;
}
export interface IForgotPasswordUseCase {
  execute(args: IForgotPasswordUseCaseArgs) : Promise<tokenEntity>;
}

export interface IUpdatePasswordWithTokenUseCase {
  execute(
    args: IUpdatePasswordWithTokenUseCaseArgs
  ):Promise<{ isUpdated: boolean }>;
}

export interface IUpdatePwdWithOldPwdUseCase {
  execute(
    args: IUpdatePwdWithOldPwdUseCaseArgs
  ): Promise<{ isUpdated: boolean }>;
}
