import { scheduleEntity } from "../../entities";
import { IScheduleModel, ScheduleModel } from "../database/schema";
export const scheduleRepository: IscheduleRepository = {
  update: async (scheduleId, data) => {
    const updatedScheduleDetail = await ScheduleModel.findOneAndUpdate(
      { _id: scheduleId },
      data
    );
    return updatedScheduleDetail;
  },

  create: async (data) => {
    const newScheduleDetails = new ScheduleModel(data);
    await newScheduleDetails.save();
    return newScheduleDetails;
  },
  findOne: async (_id) => {
    const scheduleDetails = await ScheduleModel.findOne({ _id });
    return scheduleDetails;
  },
  getScheduleWithRouteDetails: async (scheduleId) => {
    const scheduleDetails = await ScheduleModel.aggregate([
      {
        $match: {
          $expr: { $eq: ["$_id", scheduleId] },
        },
      },
      {
        $lookup: {
          from: "travellroutes",
          localField: "routeId",
          foreignField: "_id",
          as: "routeDetails",
        },
      },
      {
        $addFields: {
          routeDetails: { $arrayElemAt: ["$routeDetails", 0] },
        },
      },
    ]);
    return scheduleDetails;
  },
};

export interface IscheduleRepository {
  update: (
    busId: string,
    data: Partial<scheduleEntity>
  ) => Promise<IScheduleModel | null>;
  create: (
    data: Omit<scheduleEntity, "_id"> & {
      _id?: string;
    }
  ) => Promise<IScheduleModel | null>;
  findOne: (scheduleId: string) => Promise<IScheduleModel | null>;
  getScheduleWithRouteDetails: (scheduleId: string) => Promise<any[]>;
}
