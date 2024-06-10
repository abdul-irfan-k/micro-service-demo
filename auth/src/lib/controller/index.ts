import {
  signInUseCase,
  getUserUseCase,
  signUpUseCase,
  forgotPasswordUseCase,
  updatePasswordWithOldPwdUseCase,
  updatePasswordWithTokenUseCase,
} from "../use-case";
import { PostForgotPassword } from "./user/post-forgot-password";
import { PutPasswordWithOldPwd } from "./user/put-password-with-oldpwd";
import { PutPasswordWithToken } from "./user/put-password-with-token";
import { makeSignInController } from "./user/sign-in";
import { makeSignUpController } from "./user/sign-up";

const postSignIn = makeSignInController({ signInUseCase, getUserUseCase });
const postSignUp = makeSignUpController({ signUpUseCase, getUserUseCase });

const postForgotPassword = new PostForgotPassword(forgotPasswordUseCase);
const putPasswordWithOldPwd = new PutPasswordWithOldPwd(
  updatePasswordWithOldPwdUseCase
);
const putPasswordWithToken = new PutPasswordWithToken(
  updatePasswordWithTokenUseCase
);
export {
  postSignIn,
  postSignUp,
  postForgotPassword,
  putPasswordWithOldPwd,
  putPasswordWithToken,
};

export default Object.freeze({
  postSignIn,
  postSignUp,
});
