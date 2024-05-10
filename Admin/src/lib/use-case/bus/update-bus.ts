import { IbusRepository } from "../../../app/repository";
import { busEntity } from "../../entities";
import {
  IUpdateBusUseCase,
  IUpdateBusUseCaseArgs,
} from "../interface/bus-use-case";
export class UpdateBusUseCase implements IUpdateBusUseCase {
  constructor(private busRepository: IbusRepository) {}
  execute(args: IUpdateBusUseCaseArgs): Promise<busEntity | null> {
    throw new Error("Method not implemented.");
  }
}
