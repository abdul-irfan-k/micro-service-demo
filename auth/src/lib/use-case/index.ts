import { userRepository } from "../../app/repository/user";
import { makeGetUserUseCase } from "./get-user";
import { makeSignInUseCase } from "./sign-in";
import { makeSignUpUseCase } from "./sign-up";

const signInUseCase = makeSignInUseCase({ repository: userRepository });
const signUpUseCase = makeSignUpUseCase({ repository: userRepository });
const getUserUseCase = makeGetUserUseCase({ repository: userRepository });
export { signInUseCase, getUserUseCase, signUpUseCase };
