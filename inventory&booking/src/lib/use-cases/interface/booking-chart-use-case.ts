import { bookingChartEntity } from "@lib/entity";

export type ICreateBookingChartUseCaseArgs = Omit<bookingChartEntity, "_id"> & {
  _id?: string;
};

export type IUpdateBookingChartUseCaseArgs = Pick<bookingChartEntity, "busId"> &
  Partial<Omit<bookingChartEntity, "busId">>;

export type IGetBookingChartUseCaseArgs = Pick<
  bookingChartEntity,
  "busId" | "travellingDate"
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
