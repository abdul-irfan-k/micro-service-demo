import { IUser } from "../../entities";

interface UserId {
  userId: string;
}

interface UserDetails {
  name: string;
  email: string;
  profileImageUrl?: string | undefined;
  isBlocked?: boolean;
}
interface UserDetailWithPassword extends UserDetails {
  password: string;
}
interface UserDetailWithUserId extends UserDetails, UserId {}


export type IGetUserUseCaseArgs = UserId;
export type ICreateUserCaseArgs = UserDetailWithPassword;
export type IUpdateUserUseCaseArgs = UserDetailWithUserId;

export interface IGetUserUseCase {
  execute(args: IGetUserUseCaseArgs): Promise<IUser | null>;
}

export interface ICreateUserUseCase {
  execute(args: ICreateUserCaseArgs): Promise<IUser | null>;
}

export interface IUpdateUserUseCase {
  execute(args: IUpdateUserUseCaseArgs): Promise<IUser | null>;
}
