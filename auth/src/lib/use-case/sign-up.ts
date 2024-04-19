import { IUserRepository } from "../../app/repository/user"

export const makeSignUpUseCase = ({
  repository,
}: {
  repository: IUserRepository;
}) => {
  return async ({ email, password }: any) => {
    return await repository.signIn({ email, password });
  };
};
