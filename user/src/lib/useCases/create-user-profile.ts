import { dependiciesData } from "../interface/dependicies";

export const createUserProfile = (dependicies: dependiciesData) => {
  const {
    repository: { userRepository },
  } = dependicies;

  const execute = async (data: any) => {
    const user = await userRepository.create(data);
    return user;
  };

  return {
    execute,
  };
};
