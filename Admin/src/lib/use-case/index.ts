import {
  busRepository,
  routeRepository,
  scheduleRepository,
} from "../../app/repository";

import { CreateBusUseCase } from "./bus/create-bus";
import { UpdateBusUseCase } from "./bus/update-bus";
import { GetBusUseCase } from "./bus/get-bus";
import { CreateRouteUseCase } from "./route/create-route";
import { UpdateRouteUseCase } from "./route/update-route";
import { GetRouteUseCase } from "./route/get-route";
import { CreateScheduleUseCase } from "./schedule/create-schedule";
import { UpdateScheduleUseCase } from "./schedule/update-schedule";
import { GetScheduleUseCase } from "./schedule/get-schedule";

const createBusUseCase = new CreateBusUseCase(busRepository);
const updateBusUseCase = new UpdateBusUseCase(busRepository);
const getBusUseCase = new GetBusUseCase(busRepository);

const createRouteUseCase = new CreateRouteUseCase(routeRepository);
const updateRouteUseCase = new UpdateRouteUseCase(routeRepository);
const getRouteUseCase = new GetRouteUseCase(routeRepository);

const createScheduleUseCase = new CreateScheduleUseCase(scheduleRepository);
const updateScheduleUseCase = new UpdateScheduleUseCase(scheduleRepository);
const getScheduleUseCase = new GetScheduleUseCase(scheduleRepository);

export {
  createBusUseCase,
  updateBusUseCase,
  getBusUseCase,
  createRouteUseCase,
  updateRouteUseCase,
  getRouteUseCase,
  createScheduleUseCase,
  updateScheduleUseCase,
  getScheduleUseCase,
};
