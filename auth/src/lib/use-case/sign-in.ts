import { IUserRepository } from "../../app/repository/user";
import bcrypt from "bcrypt";

export const makeSignInUseCase = ({
  repository,
}: {
  repository: IUserRepository;
}) => {
  return async ({ email, password }: any) => {
    const userDetail =await  repository.getUser({ email });
    if (userDetail == null) return;
    const isCorrectPassword = await bcrypt.compare(password, userDetail.password);
    return {isCorrectPassword}
  };
};
