import { bookingEntity } from "@lib/entity";
import { RequireAtLeastOne } from "@lib/util/type-helper";

export type ICreateBookingUseCaseArgs = Omit<bookingEntity, "_id"> & {
  _id?: string;
};

export type IUpdateBookingUseCaseArgs = Partial<
  Omit<bookingEntity, "_id">
> &
  Pick<bookingEntity, "_id">;

export type IGetBookingUseCaseArgs = Pick<bookingEntity,"_id">

export interface ICreateBookingUseCase {
  execute(
    args: ICreateBookingUseCaseArgs
  ): Promise<bookingEntity | null>;
}

export interface IUpdateBookingUseCase {
  execute(
    args: IUpdateBookingUseCaseArgs
  ): Promise<bookingEntity | null>;
}

export interface IGetBookingUseCase {
  execute(
    args: IGetBookingUseCaseArgs
  ): Promise<bookingEntity | null>;
}
