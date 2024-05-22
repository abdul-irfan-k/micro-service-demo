import { IbusRepository } from "../../../app/repository";
import { busEntity } from "../../entities";
import {
  IGetBusUseCase,
  IGetBusUseCaseArgs,
} from "../interface/bus-use-case";
export class GetBusUseCase implements IGetBusUseCase {
  constructor(private busRepository: IbusRepository) {}
  async execute(args: IGetBusUseCaseArgs): Promise<busEntity | null> {
    const busDetail = await this.busRepository.findOne(args._id)
    return busDetail;
  }
}
