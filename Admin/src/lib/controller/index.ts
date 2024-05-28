import GetBusController from "./bus/get-bus";
import {
  getBusUseCase,
  createBusUseCase,
  updateBusUseCase,
  createRouteUseCase,
  createScheduleUseCase,
  getRouteUseCase,
  getScheduleUseCase,
  updateRouteUseCase,
  updateScheduleUseCase,
} from "../use-case";
import PostBusController from "./bus/post-bus";
import PutBusController from "./bus/put-bus";
import GetScheduleController from "./schedule/get-schedule";
import PostScheduleController from "./schedule/post-schedule";
import PutScheduleController from "./schedule/put-schedule";

const getBus = new GetBusController({ getBusUseCase });
const postBus = new PostBusController({ createBusUseCase });
const putBus = new PutBusController({ updateBusUseCase });

const getSchedule = new GetScheduleController({ getScheduleUseCase });
const postSchedule = new PostScheduleController({ createScheduleUseCase });
const putSchedule = new PutScheduleController({ updateScheduleUseCase });

export { getBus, postBus, putBus, getSchedule, postSchedule, putSchedule };
