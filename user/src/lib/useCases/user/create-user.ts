import { IUserRepository } from "../../../app/repository";

export const makeCreateUserUseCase = ({userRepository}: {
  userRepository: IUserRepository;
}) => {
  const execute = async (data: any) => {
    const user = await userRepository.create(data);
    return user;
  };

  return {
    execute,
  };
};
