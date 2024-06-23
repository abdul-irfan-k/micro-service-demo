import { bookingEntity } from "@lib/entity";
import { IbookingRespository } from "../../app/repository";
import {
  IGetBookingUseCase,
  IGetBookingUseCaseArgs,
} from "../interface/booking-use-case";

export class GetBookingUseCase implements IGetBookingUseCase {
  constructor(private bookingRespository: IbookingRespository) {}

  async execute(args: IGetBookingUseCaseArgs): Promise<bookingEntity | null> {
    const booking = await this.bookingRespository.getTicketDetail({
      ticketId: args._id,
    });
    //@ts-ignore
    return booking;
  }
}
