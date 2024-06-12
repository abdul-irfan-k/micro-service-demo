import { IbusRepository } from "@lib/app/repository";
import { busEntity } from "../../entities";
import { BadRequestError } from "../../util/bad-request-error";
import {
  ICreateBusUseCase,
  ICreateBuseUseCaseArgs,
} from "../interface/bus-use-case";
export class CreateBusUseCase implements ICreateBusUseCase {
  constructor(private busRepository: IbusRepository) {}

  async execute(args: ICreateBuseUseCaseArgs): Promise<busEntity | null> {
    const alreadyExistBusDetails =
      await this.busRepository.findOneWithBusNumber(args.number);
    const isAlreadyExistBusWithSameNumber =
      alreadyExistBusDetails != null &&
      alreadyExistBusDetails.number == args.number;
    if (isAlreadyExistBusWithSameNumber)
      throw new BadRequestError({
        code: 400,
        message: "Bus number already exist",
      });

    const busDetail = await this.busRepository.create(args);
    return busDetail;
  }
}
