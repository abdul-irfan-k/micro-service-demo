import { tokenRepository, userRepository } from "@lib/app/repository";
import { ForgotPasswordUseCase } from "./user/user-forgot-password";
import { UpdatePasswordWithOldPwdUseCase } from "./user/update-pasword-with-oldpwd";
import { UpdatePasswordWithTokenUseCase } from "./user/update-password-with-token";
import { SignInUseCase } from "./user/sign-in";
import { SignUpUseCase } from "./user/sign-up";
import { GetUserUseCase } from "./user/get-user";

const signInUseCase = new SignInUseCase(userRepository);
const signUpUseCase = new SignUpUseCase(userRepository);
const getUserUseCase = new GetUserUseCase(userRepository);

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  userRepository,
  tokenRepository
);
const updatePasswordWithOldPwdUseCase = new UpdatePasswordWithOldPwdUseCase(
  userRepository
);
const updatePasswordWithTokenUseCase = new UpdatePasswordWithTokenUseCase(
  userRepository,
  tokenRepository
);

export default Object.freeze({
  signInUseCase,
  getUserUseCase,
  signUpUseCase,
  forgotPasswordUseCase,
  updatePasswordWithOldPwdUseCase,
  updatePasswordWithTokenUseCase,
})
