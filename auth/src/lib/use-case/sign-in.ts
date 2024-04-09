import { IUserRepository } from "../../app/repository/user";

export const makeSignInUseCase = ({
  repository,
}: {
  repository: IUserRepository;
}) => {
  return async ({ email, password }: any) => {
    return await repository.signIn({ email, password });
  };
};
