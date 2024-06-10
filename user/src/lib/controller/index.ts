import { GetUserController } from "./user/get-user";
import { PostUserController } from "./user/post-user";
import { PutUserController } from "./user/put-user";
import { makeGetSeatingPreferenceController } from "./seating-preference/get-seating-preference";
import { makePostSeatingPreferenceController } from "./seating-preference/post-seating--preference";
import { makePutSeatingPreferenceController } from "./seating-preference/put-seating-preference";

import {
  createUserUseCase,
  getUserUseCase,
  updateUserUseCase,
  createSeatingPreferenceUseCase,
  getSeatingPreferenceUseCase,
  updateSeatingPreferenceUseCase,
} from "../use-cases";
const getUser = new GetUserController(getUserUseCase);
const postUser = new PostUserController(createUserUseCase);
const putUser = new PutUserController(updateUserUseCase);
const getSeatingPreference = makeGetSeatingPreferenceController({
  getSeatingPreferenceUseCase,
});
const postSeatingPreference = makePostSeatingPreferenceController({
  createSeatingPreferenceUseCase,
  getUserUseCase,
});
const putSeatingPreference = makePutSeatingPreferenceController({
  updateSeatingPreferenceUseCase,
});

export {
  getUser,
  postUser,
  putUser,
  getSeatingPreference,
  postSeatingPreference,
  putSeatingPreference,
};
