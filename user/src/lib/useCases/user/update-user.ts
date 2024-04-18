import { IUserRepository } from "../../../app/repository";

export const makeUpdateUserUseCase = ({
  userRepository,
}: {
  userRepository: IUserRepository;
}) => {
  const execute = async (id: string, data: any) => {
    const user = await userRepository.update(id, data);
    return user;
  };

  return {
    execute,
  };
};
