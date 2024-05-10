import { scheduleEntity } from "../../lib/entities";
import {IScheduleModel,ScheduleModel } from "../database/schema";
export const scheduleRepository: IscheduleRepository = {
  update: async (scheduleId: string, data: Partial<scheduleEntity>) => {
    const updatedScheduleDetail = await ScheduleModel.findOneAndUpdate(
      { _id: scheduleId },
      data
    );
    return updatedScheduleDetail;
  },

  create: async (data: scheduleEntity) => {
    const newScheduleDetails = new ScheduleModel(data);
    await newScheduleDetails.save();
    return newScheduleDetails;
  },
};

export interface IscheduleRepository {
  update: (
    busId: string,
    data: Partial<scheduleEntity>
  ) => Promise<IScheduleModel | null>;
  create: (data: scheduleEntity) => Promise<IScheduleModel | null>;
}
