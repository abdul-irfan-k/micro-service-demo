import makeGetSearchBuses from "./bus/get-search-buses";
import makeGetBookedTickets from "./booking/get-booked-tickets";
import makeGetBookedTicket from "./booking/get-booked-ticket";
import makePostBookTicket from './booking/post-book-ticket'
import makeGetBus from "./bus/get-bus";
import makeGetBusChart from "./bus/get-bus-chart";
import {
  searchBusesUseCase,
  getBookedTicketUseCase,
  getBookedTicketsUseCase,
  getBusUseCase,
  getBusChartUseCase,
  bookTicketUseCase
} from "../use-cases";

const getSearchBuses = makeGetSearchBuses({ searchBusesUseCase });
const getBus = makeGetBus({ getBusUseCase });
const getBusChart = makeGetBusChart({ getBusChartUseCase });

const getBookedTicket = makeGetBookedTicket({ getBookedTicketUseCase });
const getBookedTickets = makeGetBookedTickets({ getBookedTicketsUseCase });

// post 
const postBookTicket = makePostBookTicket({bookTicketUseCase})

export default () => {
  return {
    getSearchBuses,
    getBookedTicket,
    getBookedTickets,
    getBus,
    getBusChart,
    postBookTicket
  };
};
