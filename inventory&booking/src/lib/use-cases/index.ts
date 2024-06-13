import {
  busRepository,
  bookingRespository,
  travellRepository,
  travellHistoryRepository,
  travellRouteRepository,
} from "../app/repository";
import { GetBusUseCase } from "./bus/get-bus";
import { GetBusChartUseCase } from "./bus/get-bus-chart";
import { SearchBusesUseCase } from "./bus/seach-buses";
import { CreateTravellRouteUseCase } from "./travell-route/create-travell-route";
import { GetTravellRouteUseCase } from "./travell-route/get-travell-route";
import { UpdateTravellRouteUseCase } from "./travell-route/update-travell-route";

const searchBusesUseCase = new SearchBusesUseCase(busRepository);
const getBusUseCase = new GetBusUseCase(busRepository);
const getBusChartUseCase = new GetBusChartUseCase(busRepository);

export { searchBusesUseCase, getBusUseCase, getBusChartUseCase };

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
