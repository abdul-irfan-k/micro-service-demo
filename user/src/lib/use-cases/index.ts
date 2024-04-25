import {
  userRepository,
  seatingPreferenceRepository,
} from "../../app/repository";
import { CreateUserUseCaseCase } from "./user/create-user";
import { GetUserUseCase } from "./user/get-user";
import { UpdateUserUseCase } from "./user/update-user";
import { CreateSeatingPreferenceUseCase } from "./seating-preference/create-seating-preference";
import { GetSeatingPrefrenceUseCase } from "./seating-preference/get-seating--preference";
import { UpdateSeatingPreferenceUseCase } from "./seating-preference/update-seating-preference";

const createUserUseCase = new CreateUserUseCaseCase({ userRepository });
const updateUserUseCase = new UpdateUserUseCase({ userRepository });
const getUserUseCase = new GetUserUseCase({ userRepository });

const createSeatingPreferenceUseCase =new CreateSeatingPreferenceUseCase({
  seatingPreferenceRepository,
});
const getSeatingPreferenceUseCase = new GetSeatingPrefrenceUseCase({
  seatingPreferenceRepository,
});
const updateSeatingPreferenceUseCase = new UpdateSeatingPreferenceUseCase({
  seatingPreferenceRepository,
});

export {
  createUserUseCase,
  updateUserUseCase,
  getUserUseCase,
  createSeatingPreferenceUseCase,
  getSeatingPreferenceUseCase,
  updateSeatingPreferenceUseCase,
};
