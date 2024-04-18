import { IUserRepository } from "../../../app/repository";

export const makeGetUserUseCase = ({
  userRepository,
}: {
  userRepository: IUserRepository;
}) => {
  const execute = async (id: string) => {
    const user = await userRepository.findOne(id);
    return user;
  };

  return {
    execute,
  };
};
