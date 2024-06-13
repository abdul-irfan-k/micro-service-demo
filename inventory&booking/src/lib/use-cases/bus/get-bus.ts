import { IbusRepository } from "../../app/repository/bus";
import moment from "moment";
import { IGetBusUseCase, IGetBusUseCaseArgs } from "../interface/bus-use-case";
import { busEntity } from "@/lib/entity/bus";

export class GetBusUseCase implements IGetBusUseCase {
  constructor(private busRepository: IbusRepository) {}
  async execute(args: IGetBusUseCaseArgs): Promise<busEntity | null> {
    const busDetail = await this.busRepository.getBusDetail(args);
    return busDetail;
  }
}
