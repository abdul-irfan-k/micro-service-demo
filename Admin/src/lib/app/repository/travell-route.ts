import { travellRouteEntity } from "../../entities";
import { ITravellRouteModel, TravellRouteModel } from "../database/schema";
export const routeRepository: IrouteRepository = {
  update: async (_id, data) => {
    const updatedRouteDetail = await TravellRouteModel.findOneAndUpdate(
      { _id },
      data,
      { new: true }
    );
    return updatedRouteDetail;
  },

  create: async (data) => {
    const newRouteDetails = new TravellRouteModel(data);
    await newRouteDetails.save();
    return newRouteDetails.toJSON();
  },
  findOne: async (_id) => {
    const routeDetails = await TravellRouteModel.findOne({ _id });
    return routeDetails;
  },
};

export interface IrouteRepository {
  update: (
    routeId: string,
    data: Partial<travellRouteEntity>
  ) => Promise<ITravellRouteModel | null>;
  create: (
    data: Omit<travellRouteEntity, "_id"> & {
      _id?: string;
    }
  ) => Promise<ITravellRouteModel | null>;

  findOne: (routeId: string) => Promise<ITravellRouteModel | null>;
}
