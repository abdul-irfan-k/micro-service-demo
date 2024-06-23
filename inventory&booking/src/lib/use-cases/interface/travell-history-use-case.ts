import { bookingChartBooking, travellHistoryEntity } from "@lib/entity";
import { RequireAtLeastOne } from "@lib/util/type-helper";

export type ICreateTravellHistoryUseCaseArgs = Omit<
  travellHistoryEntity,
  "_id"
> & {
  _id?: string;
};

export type IUpdateTravellHistoryUseCaseArgs = Pick<
  travellHistoryEntity,
  "userId"
> &
  Partial<Omit<travellHistoryEntity, "userId" | "_id">>;

export type IGetTravellHistoryUseCaseArgs = RequireAtLeastOne<
  Pick<travellHistoryEntity, "_id" | "userId">
>;

export interface IUpdateTravellHistoryUseCase {
  execute(
    args: IUpdateTravellHistoryUseCaseArgs
  ): Promise<travellHistoryEntity | null>;
}

export interface IGetTravellHistoryUseCase {
  execute(
    args: IGetTravellHistoryUseCaseArgs
  ): Promise<travellHistoryEntity | null>;
}
