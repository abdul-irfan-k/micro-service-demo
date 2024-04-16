import makeGetSearchBuses from "./bus/get-search-buses";
import makeGetBookedTickets from "./booking/get-booked-tickets";
import makeGetBookedTicket from "./booking/get-booked-ticket";
import makeGetBus from "./bus/get-bus";
import makeGetBusChart from "./bus/get-bus-chart";
import {
  searchBusesUseCase,
  getBookedTicketUseCase,
  getBookedTicketsUseCase,
  getBusUseCase,
  getBusChartUseCase
} from "../use-cases";

const getSearchBuses = makeGetSearchBuses({ searchBusesUseCase });
const getBus = makeGetBus({ getBusUseCase });
const getBusChart = makeGetBusChart({ getBusChartUseCase });

const getBookedTicket = makeGetBookedTicket({ getBookedTicketUseCase });
const getBookedTickets = makeGetBookedTickets({ getBookedTicketsUseCase });

export default () => {
  return {
    getSearchBuses,
    getBookedTicket,
    getBookedTickets,
    getBus,
    getBusChart
  };
};
