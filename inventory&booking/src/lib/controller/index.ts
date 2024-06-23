import {
  searchBusesUseCase,
  getBusUseCase,
  getBusChartUseCase,
  getTravellRouteUseCase,
  createBookingUseCase,
} from "../use-cases";
import { GetBooknigsController } from "./booking/get-booking";
import { PostBookingController } from "./booking/post-booking";
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

export { getSearchBuses, getBus, getBusChart };

const getBooking = new GetBooknigsController(getBusUseCase);
// const postBooking = new PostBookingController(getBusUseCase,createBookingUseCase)