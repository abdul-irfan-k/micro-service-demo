import { bookingEntity } from "@lib/entity";
import { IbookingRespository } from "../../app/repository";
import {
  ICreateBookingUseCase,
  ICreateBookingUseCaseArgs,
} from "../interface/booking-use-case";

export class CreateBookingUseCase implements ICreateBookingUseCase {
  constructor(private bookingRespository: IbookingRespository) {}

  async execute(
    args: ICreateBookingUseCaseArgs
  ): Promise<bookingEntity | null> {
    const booking = await this.bookingRespository.create(args);
    return booking;
  }
}
