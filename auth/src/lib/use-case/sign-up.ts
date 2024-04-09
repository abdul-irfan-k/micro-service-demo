import { IUserRepository } from "../../app/repository/user";
import { UserData,UserProfile } from "../entities";

export const makeSignUpUseCase = ({
  repository,
}: {
  repository: IUserRepository;
}) => {
  return async (data: UserData) => {
    const user = new UserProfile(data)
    return await repository.signIn(user);
  };
};
