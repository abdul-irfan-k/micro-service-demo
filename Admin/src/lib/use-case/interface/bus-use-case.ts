import { busEntity } from "../../entities";

export type ICreateBuseUseCaseArgs = Omit<busEntity, "_id"> & {
  _id?: string;
};

export type IUpdateBusUseCaseArgs = Partial<Omit<busEntity, "_id">> &
  Pick<busEntity, "_id">;

export type IGetBusUseCaseArgs = Pick<busEntity, "_id">;

export interface ICreateBusUseCase {
  execute(args: ICreateBuseUseCaseArgs): Promise<busEntity | null>;
}

export interface IUpdateBusUseCase {
  execute(args: IUpdateBusUseCaseArgs): Promise<busEntity | null>;
}

export interface IGetBusUseCase {
  execute(args: IGetBusUseCaseArgs): Promise<busEntity | null>;
}
