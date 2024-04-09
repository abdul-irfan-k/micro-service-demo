import { signInUseCase, getUserUseCase, signUpUseCase } from "../use-case";
import { makeSignInController } from "./sign-in";
import { makeSignUpController } from "./singn-up";

const postSignIn = makeSignInController({ signInUseCase, getUserUseCase });
const postSignUp = makeSignUpController({ signUpUseCase, getUserUseCase });

export { postSignIn, postSignUp };

export default Object.freeze({
  postSignIn,
  postSignUp,
});
