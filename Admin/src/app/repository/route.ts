import { routeEntity } from "../../lib/entities";
import { IRouteModel, RouteModel } from "../database/schema";
export const routeRepository: IrouteRepository = {
  update: async (_id, data) => {
    const updatedRouteDetail = await RouteModel.findOneAndUpdate({ _id }, data);
    return updatedRouteDetail;
  },

  create: async (data) => {
    const newRouteDetails = new RouteModel(data);
    await newRouteDetails.save();
    return newRouteDetails;
  },
  findOne: async (_id) => {
    const routeDetails = await RouteModel.findOne({ _id });
    return routeDetails;
  },
};

export interface IrouteRepository {
  update: (
    routeId: string,
    data: Partial<routeEntity>
  ) => Promise<IRouteModel | null>;
  create: (
    data: Omit<routeEntity, "_id"> & {
      _id?: string;
    }
  ) => Promise<IRouteModel | null>;

  findOne: (routeId: string) => Promise<IRouteModel | null>;
}
