import { travellRouteEntity } from "../../entities";

export type ICreateTravellRouteUseCaseArgs = Omit<travellRouteEntity, "_id"> & {
  _id?: string;
};

export type IUpdateTravellRouteUseCaseArgs = Partial<Omit<travellRouteEntity, "_id">> &
  Pick<travellRouteEntity, "_id">;

export type IGetTravellRouteUseCaseArgs = Pick<travellRouteEntity, "_id">;

export interface ICreateTravellRouteUseCase {
  execute(args: ICreateTravellRouteUseCaseArgs): Promise<travellRouteEntity | null>;
}

export interface IUpdateTravellRouteUseCase {
  execute(args: IUpdateTravellRouteUseCaseArgs): Promise<travellRouteEntity | null>;
}

export interface IGetTravellRouteUseCase {
  execute(args: IGetTravellRouteUseCaseArgs): Promise<travellRouteEntity | null>;
}
