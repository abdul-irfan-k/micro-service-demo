import { routeEntity } from "../../lib/entities";
import {IScheduleModel,ScheduleModel } from "../database/schema";
export const routeRepository: IrouteRepository = {
  update: async (scheduleId: string, data: Partial<routeEntity>) => {
    const updatedRouteDetail = await ScheduleModel.findOneAndUpdate(
      { _id: scheduleId },
      data
    );
    return updatedRouteDetail;
  },

  create: async (data: routeEntity) => {
    const newRouteDetails = new ScheduleModel(data);
    await newRouteDetails.save();
    return newRouteDetails;
  },
};

export interface IrouteRepository {
  update: (
    busId: string,
    data: Partial<routeEntity>
  ) => Promise<IScheduleModel | null>;
  create: (data: routeEntity) => Promise<IScheduleModel | null>;
}
