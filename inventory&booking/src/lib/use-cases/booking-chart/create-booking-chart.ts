import { bookingChartEntity } from "@/lib/entity";
import {
  ICreateBookingChartUseCase,
  ICreateBookingChartUseCaseArgs,
} from "../interface/booking-chart-use-case";
import { IbookingChartRepository } from "@/lib/app/repository";

export class CreateBusUseCase implements ICreateBookingChartUseCase {
  constructor(private bookingChartRepository: IbookingChartRepository) {}
  async execute(
    args: ICreateBookingChartUseCaseArgs
  ): Promise<bookingChartEntity | null> {
    const bookingChartDetails  = await this.bookingChartRepository.create(args);
    return bookingChartDetails ;
  }
}
