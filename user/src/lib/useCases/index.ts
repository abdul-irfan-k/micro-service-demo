import { userRepository } from "../../app/repository";
import { makeCreateUserUseCase } from "./user/create-user";
import { makeGetUserUseCase } from "./user/get-user";
import { makeUpdateUserUseCase } from "./user/update-user";

const createUserUseCase = makeCreateUserUseCase({ userRepository });
const updateUserUseCase = makeUpdateUserUseCase({ userRepository });
const getUserUseCase = makeGetUserUseCase({ userRepository });

export { createUserUseCase, updateUserUseCase, getUserUseCase };
