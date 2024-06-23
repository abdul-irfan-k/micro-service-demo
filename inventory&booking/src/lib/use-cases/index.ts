import {
  busRepository,
  bookingRespository,
  travellHistoryRepository,
  travellRouteRepository,
  scheduleRepository,
  bookingChartRepository,
} from "@lib/app/repository";
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
import { UpdateTravellHistoryUseCase } from "./travell-history/update-travell-history";
import { CreateBookingChartUseCase } from "./booking-chart/create-booking-chart";
import { UpdateBookingChartUseCase } from "./booking-chart/update-booking-chart";
import { CreateBookingUseCase } from "./booking/create-booking";
import { GetBookingUseCase } from "./booking/get-booking";

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
//
// });

const createBookingUseCase = new CreateBookingUseCase(bookingRespository);
const getBookingUseCase = new GetBookingUseCase(bookingRespository)
export { createBookingUseCase };

const createBookingChartUseCase = new CreateBookingChartUseCase(
  bookingChartRepository
);
const updateBookingChartUseCase = new UpdateBookingChartUseCase(
  bookingChartRepository
);
export { createBookingChartUseCase, updateBookingChartUseCase };

const updateTravellHistoryUseCase = new UpdateTravellHistoryUseCase(
  travellHistoryRepository
);
export { updateTravellHistoryUseCase };
