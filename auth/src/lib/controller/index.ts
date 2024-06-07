import { signInUseCase, getUserUseCase, signUpUseCase } from "../use-case";
import { makeSignInController } from "./user/sign-in";
import { makeSignUpController } from "./user/sign-up";

const postSignIn = makeSignInController({ signInUseCase, getUserUseCase });
const postSignUp = makeSignUpController({ signUpUseCase, getUserUseCase });

export { postSignIn, postSignUp };

export default Object.freeze({
  postSignIn,
  postSignUp,
});
