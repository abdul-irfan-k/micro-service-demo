import GetBusController from "./bus/get-bus";
import {
  getBusUseCase,
  createBusUseCase,
  updateBusUseCase,
  createTravellRouteUseCase,
  createScheduleUseCase,
  getTravellRouteUseCase,
  getScheduleUseCase,
  updateTravellRouteUseCase,
  updateScheduleUseCase,
} from "../use-case";
import PostBusController from "./bus/post-bus";
import PutBusController from "./bus/put-bus";
import GetScheduleController from "./schedule/get-schedule";
import PostScheduleController from "./schedule/post-schedule";
import PutScheduleController from "./schedule/put-schedule";
import GetTravellRouteController from "./travell-route/get-travell-route";
import PostTravellRouteController from "./travell-route/post-travell-route";
import PutTravellRouteController from "./travell-route/put-travell-route";

const getBus = new GetBusController({ getBusUseCase });
const postBus = new PostBusController({ createBusUseCase });
const putBus = new PutBusController({ updateBusUseCase });

export const busController = { getBus, postBus, putBus };

const getSchedule = new GetScheduleController({ getScheduleUseCase });
const postSchedule = new PostScheduleController({ createScheduleUseCase });
const putSchedule = new PutScheduleController({ updateScheduleUseCase });

export const scheduleController = { getSchedule, postSchedule, putSchedule };

const getTravellRoute = new GetTravellRouteController({
  getTravellRouteUseCase,
});
const postTravellRoute = new PostTravellRouteController({
  createTravellRouteUseCase,
});
const putTravellRoute = new PutTravellRouteController({
  updateTravellRouteUseCase,
});

export const travellRouteController = {
  getTravellRoute,
  postTravellRoute,
  putTravellRoute,
};
