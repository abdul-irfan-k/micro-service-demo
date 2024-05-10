import { busEntity } from "../../lib/entities";
import { BusModel, IBusModel } from "../database/schema";
export const busRepository: IbusRepository = {
  update: async (busId: string, data: Partial<busEntity>) => {
    const updatedBusDetail = await BusModel.findOneAndUpdate(
      { _id: busId },
      data
    );
    return updatedBusDetail;
  },

  create: async (data: busEntity) => {
    const newBusDetails = new BusModel(data);
    await newBusDetails.save();
    return newBusDetails;
  },
};

export interface IbusRepository {
  update: (
    busId: string,
    data: Partial<busEntity>
  ) => Promise<IBusModel | null>;
  create: (data: busEntity) => Promise<IBusModel | null>;
}
