import { routeEntity } from "../../entities";

export type ICreateRouteUseCaseArgs = Omit<routeEntity, "_id"> & {
  _id?: string;
};

export type IUpdateRouteUseCaseArgs = Partial<Omit<routeEntity, "_id">> &
  Pick<routeEntity, "_id">;

export type IGetRouteUseCaseArgs = Pick<routeEntity, "_id">;

export interface ICreateRouteUseCase {
  execute(args: ICreateRouteUseCaseArgs): Promise<routeEntity | null>;
}

export interface IUpdateRouteUseCase {
  execute(args: IUpdateRouteUseCaseArgs): Promise<routeEntity | null>;
}

export interface IGetRouteUseCase {
  execute(args: IGetRouteUseCaseArgs): Promise<routeEntity | null>;
}
