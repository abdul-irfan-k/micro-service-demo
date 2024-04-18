import { makeGetUserController } from "./user/get-user";
import { makePostUserController } from "./user/post-user";
import {
  createUserUseCase,
  getUserUseCase,
  updateUserUseCase,
} from "../useCases";

const getUser = makeGetUserController({ getUserUseCase });
const postUser = makePostUserController({ createUserUseCase });
const putUser = makePostUserController({ createUserUseCase });

export { getUser, postUser, putUser };
