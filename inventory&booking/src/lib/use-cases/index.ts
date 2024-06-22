import {
  busRepository,
  bookingRespository,
  travellRepository,
  travellHistoryRepository,
  travellRouteRepository,
  scheduleRepository,
} from "../app/repository";
import { CreateBusUseCase } from "./bus/create-bus";
import { GetBusUseCase } from "./bus/get-bus";
import { GetBusChartUseCase } from "./bus/get-bus-chart";
import { SearchBusesUseCase } from "./bus/seach-buses";
import { UpdateBusUseCase } from "./bus/update-bus";
import { CreateScheduleUseCase } from "./schedule/create-schedule";
import { GetScheduleUseCase } from "./schedule/get-schedule";
import { UpdateScheduleUseCase } from "./schedule/update-schedule";
import { CreateTravellRouteUseCase } from "./travell-route/create-travell-route";
import { GetTravellRouteUseCase } from "./travell-route/get-travell-route";
import { UpdateTravellRouteUseCase } from "./travell-route/update-travell-route";

const searchBusesUseCase = new SearchBusesUseCase(busRepository);
const getBusUseCase = new GetBusUseCase(busRepository);
const getBusChartUseCase = new GetBusChartUseCase(busRepository);
const createBusUseCase = new CreateBusUseCase(busRepository);
const updateBusUseCase = new UpdateBusUseCase(busRepository);

export {
  searchBusesUseCase,
  getBusUseCase,
  getBusChartUseCase,
  createBusUseCase,
  updateBusUseCase,
};

const getTravellRouteUseCase = new GetTravellRouteUseCase(
  travellRouteRepository
);
const updateTravellRouteUseCase = new UpdateTravellRouteUseCase(
  travellRouteRepository
);
const createTravellRouteUseCse = new CreateTravellRouteUseCase(
  travellRouteRepository
);

export {
  getTravellRouteUseCase,
  updateTravellRouteUseCase,
  createTravellRouteUseCse,
};

const createScheduleUseCase = new CreateScheduleUseCase(scheduleRepository);
const updateScheduleUseCase = new UpdateScheduleUseCase(scheduleRepository);
const getScheduleUseCase = new GetScheduleUseCase(scheduleRepository);

export { createScheduleUseCase, updateScheduleUseCase, getScheduleUseCase };

// const getBookedTicketUseCase = new GetBookedTicketUseCase({
//   bookingRespository,
// });
// const getBookedTicketsUseCase = makeGetBookedTicketsUseCase({
//   bookingRespository,
// });
// const bookTicketUseCase = makeBookTicketUseCase({
//   bookingRespository,
//   busRepository,
//   travellRepository,
// });

// const getTravellHistoryUseCase = makeGetTravellHistoryUseCase({
//   travellHistoryRepository,
// });
// const deleteAllTravellHistoryUseCase = makeDeleteAllTravellHistoryUseCase({
//   travellHistoryRepository,
// });
// const deleteTravellHistoryUseCase = makeDeleteTravellHistoryUseCase({
//   travellHistoryRepository,
// });

//export  searchBusesUseCase,
// getBookedTicketUseCase,
// getBookedTicketsUseCase,
// getBusUseCase,
// getBusChartUseCase,
// bookTicketUseCase,
// getTravellHistoryUseCase,
// deleteAllTravellHistoryUseCase,
// deleteTravellHistoryUseCase,
//{};
