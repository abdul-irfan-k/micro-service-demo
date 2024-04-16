import { busRepository, bookingRespository } from "../../app/repository/";
import { makeGetBookedTicketUseCase } from "./ticket/get-booked-ticket";
import { makeGetBookedTicketsUseCase } from "./ticket/get-booked-tickets";
import { makeSeachBusesUseCase } from "./bus/seach-buses";
import { makeGetBusUseCase } from "./bus/get-bus";
import { makeGetBusChartUseCase } from "./bus/get-bus-chart";

const searchBusesUseCase = makeSeachBusesUseCase({ busRepository });
const getBusUseCase = makeGetBusUseCase({ busRepository });
const getBusChartUseCase = makeGetBusChartUseCase({ busRepository });

const getBookedTicketUseCase = makeGetBookedTicketUseCase({
  bookingRespository,
});
const getBookedTicketsUseCase = makeGetBookedTicketsUseCase({
  bookingRespository,
});
export {
  searchBusesUseCase,
  getBookedTicketUseCase,
  getBookedTicketsUseCase,
  getBusUseCase,
  getBusChartUseCase,
};
