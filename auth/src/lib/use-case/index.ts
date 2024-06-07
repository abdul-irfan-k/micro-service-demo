import { userRepository } from "@lib/app/repository/user";
import { makeGetUserUseCase } from "./user/get-user";
import { makeSignInUseCase } from "./user/sign-in";
import { makeSignUpUseCase } from "./user/sign-up";

const signInUseCase = makeSignInUseCase({ repository: userRepository });
const signUpUseCase = makeSignUpUseCase({ repository: userRepository });
const getUserUseCase = makeGetUserUseCase({ repository: userRepository });
export { signInUseCase, getUserUseCase, signUpUseCase };
