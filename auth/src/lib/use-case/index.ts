import { tokenRepository, userRepository } from "@lib/app/repository";
import { makeGetUserUseCase } from "./user/get-user";
import { makeSignInUseCase } from "./user/sign-in";
import { makeSignUpUseCase } from "./user/sign-up";
import { ForgotPasswordUseCase } from "./user/user-forgot-password";
import { UpdatePasswordWithOldPwdUseCase } from "./user/update-pasword-with-oldpwd";
import { UpdatePasswordWithTokenUseCase } from "./user/update-password-with-token";

const signInUseCase = makeSignInUseCase({ repository: userRepository });
const signUpUseCase = makeSignUpUseCase({ repository: userRepository });
const getUserUseCase = makeGetUserUseCase({ repository: userRepository });

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

export {
  signInUseCase,
  getUserUseCase,
  signUpUseCase,
  forgotPasswordUseCase,
  updatePasswordWithOldPwdUseCase,
  updatePasswordWithTokenUseCase
};
