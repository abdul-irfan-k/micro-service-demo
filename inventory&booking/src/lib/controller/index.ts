import {
  searchBusesUseCase,
  // getBookedTicketUseCase,
  // getBookedTicketsUseCase,
  getBusUseCase,
  getBusChartUseCase,
  getTravellRouteUseCase,
  // bookTicketUseCase,
  // getTravellHistoryUseCase,
  // deleteAllTravellHistoryUseCase,
  // deleteTravellHistoryUseCase,
} from "../use-cases";
import { GetBusController } from "./bus/get-bus";
import { getBusChartController } from "./bus/get-bus-chart";
import { GetSearchBusesController } from "./bus/get-search-buses";

//@ts-ignore
const getSearchBuses = new GetSearchBusesController(
  getBusUseCase,
  getTravellRouteUseCase
);
const getBus = new GetBusController(getBusUseCase);
const getBusChart = new getBusChartController(getBusChartUseCase);

export {
  getSearchBuses,
  getBus,
  getBusChart,
}
// const getBookedTicket = makeGetBookedTicket({ getBookedTicketUseCase });
// const getBookedTickets = makeGetBookedTickets({ getBookedTicketsUseCase });

// post
// const postBookTicket = makePostBookTicket({ bookTicketUseCase });

// const getTravellHistory = makeGetTravellHistory({ getTravellHistoryUseCase });
// const deleteTravellHistory = makeDeleteTravellHistory({
//   deleteTravellHistoryUseCase,
// });
