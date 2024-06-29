import { bookingChartEntity } from "@/lib/entity";
import {
  IUpdateBookingChartUseCase,
  IUpdateBookingChartUseCaseArgs,
} from "../interface/booking-chart-use-case";
import { IbookingChartRepository } from "@/lib/app/repository";

export class UpdateBookingChartUseCase implements IUpdateBookingChartUseCase {
  constructor(private bookingChartRepository: IbookingChartRepository) {}
  async execute(
    args: IUpdateBookingChartUseCaseArgs
  ): Promise<bookingChartEntity | null> {
    const bookingChartDetails = await this.bookingChartRepository.update(
      args._id,
      args
    );
    return bookingChartDetails;
  }
}
