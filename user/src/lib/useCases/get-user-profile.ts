import { dependiciesData } from "../interface/dependicies";

export const getUserProfile = (repository: dependiciesData['repository']) => {
  const {
    userRepository
  } = repository;

  const execute = async (id: string, data: any) => {
    const user = await userRepository.findOne(id);
    return user;
  };

  return {
    execute,
  };
};
