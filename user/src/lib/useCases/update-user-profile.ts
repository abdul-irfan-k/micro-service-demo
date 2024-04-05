import { dependiciesData } from "../interface/dependicies";

export const updateUserProfile = (dependicies: dependiciesData) => {
  const {
    repository: { userRepository },
  } = dependicies;

  const execute = async (id: string, data: any) => {
    const user = await userRepository.update(id, data);
    return user;
  };

  return {
    execute,
  };
};
