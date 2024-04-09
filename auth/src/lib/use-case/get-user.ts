import { IUserRepository } from "../../app/repository/user";

export const makeGetUserUseCase = ({
  repository,
}: {
  repository: IUserRepository;
}) => {
  return async ({ email }: any) => {
    return await repository.getUser({ email });
  };
};
