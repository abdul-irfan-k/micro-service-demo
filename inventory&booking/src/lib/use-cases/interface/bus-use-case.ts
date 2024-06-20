import { busEntity } from "@/lib/entity/bus";
import { RequireAtLeastOne } from "@/lib/util/type-helper";

export type IGetBusUseCaseArgs = RequireAtLeastOne<
  Pick<busEntity, "_id" | "number">
>;
export type ICreateBuseUseCaseArgs = Omit<busEntity, "_id"> & {
  _id?: string;
};

export type IUpdateBusUseCaseArgs = Partial<Omit<busEntity, "_id">> &
  Pick<busEntity, "_id">;


export interface IGetBusUseCase {
  execute(args: IGetBusUseCaseArgs): Promise<busEntity | null>;
}
export interface ICreateBusUseCase {
  execute(args: ICreateBuseUseCaseArgs): Promise<busEntity | null>;
}
export interface IUpdateBusUseCase {
  execute(args: IUpdateBusUseCaseArgs): Promise<busEntity | null>;
}

export interface IGetBusChartUseCase {
  execute(args: IGetBusUseCaseArgs): Promise<busEntity | null>;
}
export interface ISearchBusesUseCase {
  execute(args: IGetBusUseCaseArgs): Promise<busEntity | null>;
}