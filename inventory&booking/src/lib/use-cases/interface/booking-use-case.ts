import { travellRouteEntity } from "@lib/entity";
import { RequireAtLeastOne } from "@lib/util/type-helper";

export type ICreateTravellRouteUseCaseArgs = Omit<travellRouteEntity, "_id"> & {
  _id?: string;
};

export type IUpdateTravellRouteUseCaseArgs = Partial<
  Omit<travellRouteEntity, "_id">
> &
  Pick<travellRouteEntity, "_id">;

export type IGetTravellRouteUseCaseArgs =
  | RequireAtLeastOne<Pick<travellRouteEntity, "_id" | "routeName">>
  | {
      destinationPlace: string;
      startPlace: string;
      maxDistance?: number;
      minDistance?: number;
    };

export interface ICreateTravellRouteUseCase {
  execute(
    args: ICreateTravellRouteUseCaseArgs
  ): Promise<travellRouteEntity | null>;
}

export interface IUpdateTravellRouteUseCase {
  execute(
    args: IUpdateTravellRouteUseCaseArgs
  ): Promise<travellRouteEntity | null>;
}

export interface IGetTravellRouteUseCase {
  execute(
    args: IGetTravellRouteUseCaseArgs
  ): Promise<travellRouteEntity | null>;
}
