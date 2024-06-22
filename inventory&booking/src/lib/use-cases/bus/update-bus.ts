import { busEntity } from "@/lib/entity/bus";
import {
  IUpdateBusUseCase,
  IUpdateBusUseCaseArgs,
} from "../interface/bus-use-case";
import { IbusRepository } from "@/lib/app/repository";

export class UpdateBusUseCase implements IUpdateBusUseCase {
  constructor(private busRepository: IbusRepository) {}
  async execute(args: IUpdateBusUseCaseArgs): Promise<busEntity | null> {
    const updatedBusDetails = this.busRepository.update(args._id, args);
    return updatedBusDetails
  }
}
