import {
  busRepository,
  bookingRespository,
  travellRepository,
} from "../../app/repository/";
import { makeGetBookedTicketUseCase } from "./ticket/get-booked-ticket";
import { makeGetBookedTicketsUseCase } from "./ticket/get-booked-tickets";
import { makeSeachBusesUseCase } from "./bus/seach-buses";
import { makeGetBusUseCase } from "./bus/get-bus";
import { makeGetBusChartUseCase } from "./bus/get-bus-chart";
import { makeBookTicketUseCase } from "./ticket/book-ticket";
import { makeGetTravellHistoryUseCase } from "./travell/get-travell-history";
import { makeDeleteAllTravellHistoryUseCase } from "./travell/delete-all-travell-history";
import { makeDeleteTravellHistoryUseCase } from "./travell/delete-travell-historyt";

const searchBusesUseCase = makeSeachBusesUseCase({ busRepository });
const getBusUseCase = makeGetBusUseCase({ busRepository });
const getBusChartUseCase = makeGetBusChartUseCase({ busRepository });

const getBookedTicketUseCase = makeGetBookedTicketUseCase({
  bookingRespository,
});
const getBookedTicketsUseCase = makeGetBookedTicketsUseCase({
  bookingRespository,
});
const bookTicketUseCase = makeBookTicketUseCase({
  bookingRespository,
  busRepository,
  travellRepository,
});

const getTravellHistoryUseCase = makeGetTravellHistoryUseCase({ travellRepository });
const deleteAllTravellHistoryUseCase = makeDeleteAllTravellHistoryUseCase({
  travellRepository,
});
const deleteTravellHistoryUseCase = makeDeleteTravellHistoryUseCase({
  travellRepository,
});

export {
  searchBusesUseCase,
  getBookedTicketUseCase,
  getBookedTicketsUseCase,
  getBusUseCase,
  getBusChartUseCase,
  bookTicketUseCase,
  getTravellHistoryUseCase,
  deleteAllTravellHistoryUseCase,
  deleteTravellHistoryUseCase,
};
