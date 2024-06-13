import { busEntity } from "@/lib/entity/bus";
import {
  ICreateBusUseCase,
  ICreateBuseUseCaseArgs,
} from "../interface/bus-use-case";
import { IbusRepository } from "@/lib/app/repository";

export class CreateBusUseCase implements ICreateBusUseCase {
  constructor(private busRepository: IbusRepository) {}
  async execute(args: ICreateBuseUseCaseArgs): Promise<busEntity | null> {
    const busDetails = await this.busRepository.create(args);
    return busDetails
  }
}
