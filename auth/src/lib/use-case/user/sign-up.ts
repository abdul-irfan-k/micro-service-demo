import { IUserRepository } from "../../app/repository/user"

export const makeSignUpUseCase = ({
  repository,
}: {
  repository: IUserRepository;
}) => {
  return async (data: any) => {
    return await repository.signUp(data);
  };
};
