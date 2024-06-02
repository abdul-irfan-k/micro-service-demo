import {
  busRepository,
  routeRepository,
  scheduleRepository,
} from "../app/repository";

import { CreateBusUseCase } from "./bus/create-bus";
import { UpdateBusUseCase } from "./bus/update-bus";
import { GetBusUseCase } from "./bus/get-bus";
import { CreateTravellRouteUseCase } from "./route/create-route";
import { UpdateTravellRouteUseCase } from "./route/update-route";
import { GetTravellRouteUseCase } from "./route/get-route";
import { CreateScheduleUseCase } from "./schedule/create-schedule";
import { UpdateScheduleUseCase } from "./schedule/update-schedule";
import { GetScheduleUseCase } from "./schedule/get-schedule";

const createBusUseCase = new CreateBusUseCase(busRepository);
const updateBusUseCase = new UpdateBusUseCase(busRepository);
const getBusUseCase = new GetBusUseCase(busRepository);

const createTravellRouteUseCase = new CreateTravellRouteUseCase(
  routeRepository
);
const updateTravellRouteUseCase = new UpdateTravellRouteUseCase(
  routeRepository
);
const getTravellRouteUseCase = new GetTravellRouteUseCase(routeRepository);

const createScheduleUseCase = new CreateScheduleUseCase(scheduleRepository);
const updateScheduleUseCase = new UpdateScheduleUseCase(scheduleRepository);
const getScheduleUseCase = new GetScheduleUseCase(scheduleRepository);

export {
  createBusUseCase,
  updateBusUseCase,
  getBusUseCase,
  createTravellRouteUseCase,
  updateTravellRouteUseCase,
  getTravellRouteUseCase,
  createScheduleUseCase,
  updateScheduleUseCase,
  getScheduleUseCase,
};
