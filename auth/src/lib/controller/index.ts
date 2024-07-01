import authUseCases from '../use-case';
import { PostForgotPassword } from './user/post-forgot-password';
import { PutPasswordWithOldPwd } from './user/put-password-with-oldpwd';
import { PutPasswordWithToken } from './user/put-password-with-token';
import { SignInController } from './user/sign-in';
import { SignUpController } from './user/sign-up';

const postSignIn = new SignInController(
  authUseCases.signInUseCase,
  authUseCases.getUserUseCase,
);
const postSignUp = new SignUpController(
  authUseCases.signUpUseCase,
  authUseCases.getUserUseCase,
);

const postForgotPassword = new PostForgotPassword(
  authUseCases.forgotPasswordUseCase,
  authUseCases.getUserUseCase,
);
const putPasswordWithOldPwd = new PutPasswordWithOldPwd(
  authUseCases.updatePasswordWithOldPwdUseCase,
);
const putPasswordWithToken = new PutPasswordWithToken(
  authUseCases.updatePasswordWithTokenUseCase,
  authUseCases.getUserUseCase,
);
export {
  postSignIn,
  postSignUp,
  postForgotPassword,
  putPasswordWithOldPwd,
  putPasswordWithToken,
};
