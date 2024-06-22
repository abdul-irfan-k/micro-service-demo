import { scheduleEntity } from "../../entity";

export type ICreateScheduleUseCaseArgs = Omit<scheduleEntity, "_id"> & {
  _id?: string;
};

export type IUpdateSheduleUseCaseArgs = Partial<Omit<scheduleEntity, "_id">> &
  Pick<scheduleEntity, "_id">;
export type IGetScheduleUseCaseArgs = Pick<scheduleEntity, "_id">;

export interface ICreateScheduleUseCase {
  execute(args: ICreateScheduleUseCaseArgs): Promise<scheduleEntity | null>;
}

export interface IUpdateScheduleUseCase {
  execute(args: IUpdateSheduleUseCaseArgs): Promise<scheduleEntity | null>;
}

export interface IGetScheduleUseCase {
  execute(args: IGetScheduleUseCaseArgs): Promise<scheduleEntity | null>;
}
