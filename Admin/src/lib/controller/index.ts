import GetBusController from "./bus/get-bus";
import { getBusUseCase } from "../use-case";

const getBus = new GetBusController({ getBusUseCase });

export { getBus };
