import { bookingChartEntity } from "@/lib/entity";
import {
  IGetBookingChartUseCase,
  IGetBookingChartUseCaseArgs,
} from "../interface/booking-chart-use-case";
import { IbookingChartRepository } from "@/lib/app/repository";

export class GetBookingChartUseCase implements IGetBookingChartUseCase {
  constructor(private bookingChartRepository: IbookingChartRepository) {}
  async execute(
    args: IGetBookingChartUseCaseArgs
  ): Promise<bookingChartEntity | null> {
    const bookingChartDetails =
      await this.bookingChartRepository.findOneByBusIdAndDate(
        args.busId,
        args.travellingDate
      );
    return bookingChartDetails;
  }
}
