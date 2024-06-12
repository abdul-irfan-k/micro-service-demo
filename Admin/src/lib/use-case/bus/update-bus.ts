import { IbusRepository } from "@lib/app/repository";
import { busEntity } from "../../entities";
import {
  IUpdateBusUseCase,
  IUpdateBusUseCaseArgs,
} from "../interface/bus-use-case";
export class UpdateBusUseCase implements IUpdateBusUseCase {
  constructor(private busRepository: IbusRepository) {}
  async execute(args: IUpdateBusUseCaseArgs): Promise<busEntity | null> {
    const updatedBusDetail = await this.busRepository.update(args._id, args);
    return updatedBusDetail;
  }
}
