import { travellRouteEntity } from "../../entities";

export type ICreateRouteUseCaseArgs = Omit<travellRouteEntity, "_id"> & {
  _id?: string;
};

export type IUpdateRouteUseCaseArgs = Partial<Omit<travellRouteEntity, "_id">> &
  Pick<travellRouteEntity, "_id">;

export type IGetRouteUseCaseArgs = Pick<travellRouteEntity, "_id">;

export interface ICreateRouteUseCase {
  execute(args: ICreateRouteUseCaseArgs): Promise<travellRouteEntity | null>;
}

export interface IUpdateRouteUseCase {
  execute(args: IUpdateRouteUseCaseArgs): Promise<travellRouteEntity | null>;
}

export interface IGetRouteUseCase {
  execute(args: IGetRouteUseCaseArgs): Promise<travellRouteEntity | null>;
}
