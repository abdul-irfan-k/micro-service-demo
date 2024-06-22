import { bookingChartBooking, bookingChartEntity, bookingEntity } from "@lib/entity";

export type ICreateBookingChartUseCaseArgs = Omit<bookingChartEntity, "_id"> & {
  _id?: string;
};

export type IUpdateBookingChartUseCaseArgs = Pick<
  bookingChartEntity,
  "_id" 
> & bookingChartBooking

export type IGetBookingChartUseCaseArgs = Pick<
  bookingChartEntity,
  "_id" | "travellingDate"
>;

export interface ICreateBookingChartUseCase {
  execute(
    args: ICreateBookingChartUseCaseArgs
  ): Promise<bookingChartEntity | null>;
}

export interface IUpdateBookingChartUseCase {
  execute(
    args: IUpdateBookingChartUseCaseArgs
  ): Promise<bookingChartEntity | null>;
}

export interface IGetBookingChartUseCase {
  execute(
    args: IGetBookingChartUseCaseArgs
  ): Promise<bookingChartEntity | null>;
}
