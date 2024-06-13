import { busEntity } from "@/lib/entity/bus";
import {
  IGetBusChartUseCase,
  IGetBusUseCaseArgs,
} from "../interface/bus-use-case";
import { IbusRepository } from "@/lib/app/repository";

export class GetBusChartUseCase implements IGetBusChartUseCase {
  constructor(private busRepository: IbusRepository) {}
  execute(args: IGetBusUseCaseArgs): Promise<busEntity | null> {
    const buschart =
      this.busRepository.getBusesAvailabeAndBookedSeatsChart(args);
    //@ts-ignore
    return buschart;
  }
}
