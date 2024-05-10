import { IbusRepository } from "../../../app/repository";
import { busEntity } from "../../entities";
import {
  ICreateBusUseCase,
  ICreateBuseUseCaseArgs,
} from "../interface/bus-use-case";
export class CreateBusUseCase implements ICreateBusUseCase {
  constructor(private busRepository: IbusRepository) {}

  execute(args: ICreateBuseUseCaseArgs): Promise<busEntity | null> {

  }
}
