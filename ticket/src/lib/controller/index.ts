import makeGetSearchBuses from "./bus/get-search-buses";
import makeGetBookedTickets from "./booking/get-booked-tickets";
import makeGetBookedTicket from "./booking/get-booked-ticket";
import makePostBookTicket from "./booking/post-book-ticket";
import makeGetBus from "./bus/get-bus";
import makeGetBusChart from "./bus/get-bus-chart";

import makeGetTravellHistory from "./travell/get-travell-history";
import makeDeleteTravellHistory from "./travell/delete-travell-history";

import {
  searchBusesUseCase,
  getBookedTicketUseCase,
  getBookedTicketsUseCase,
  getBusUseCase,
  getBusChartUseCase,
  bookTicketUseCase,
  getTravellHistoryUseCase,
  deleteAllTravellHistoryUseCase,
  deleteTravellHistoryUseCase,
} from "../use-cases";

const getSearchBuses = makeGetSearchBuses({ searchBusesUseCase });
const getBus = makeGetBus({ getBusUseCase });
const getBusChart = makeGetBusChart({ getBusChartUseCase });

const getBookedTicket = makeGetBookedTicket({ getBookedTicketUseCase });
const getBookedTickets = makeGetBookedTickets({ getBookedTicketsUseCase });

// post
const postBookTicket = makePostBookTicket({ bookTicketUseCase });

const getTravellHistory = makeGetTravellHistory({ getTravellHistoryUseCase });
const deleteTravellHistory = makeDeleteTravellHistory({
  deleteTravellHistoryUseCase,
});

export default () => {
  return {
    getSearchBuses,
    getBookedTicket,
    getBookedTickets,
    getBus,
    getBusChart,
    postBookTicket,

    getTravellHistory,
    deleteTravellHistory,
  };
};
