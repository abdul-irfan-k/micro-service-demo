import { busEntity } from "../../entities";
import { BusModel, IBusModel } from "../database/schema";
export const busRepository: IbusRepository = {
  update: async (busId: string, data: Partial<busEntity>) => {
    const updatedBusDetail = await BusModel.findOneAndUpdate(
      { _id: busId },
      data
    );
    return updatedBusDetail;
  },

  create: async (data) => {
    const newBusDetails = new BusModel(data);
    await newBusDetails.save();
    return newBusDetails;
  },

  findOne: async (id) => {
    const busDetails = await BusModel.findOne({ _id: id });
    return busDetails;
  },
  findOneWithBusNumber: async (busNumber) => {
    const busDetails = await BusModel.findOne({ number: busNumber });
    return busDetails;
  },
};

export interface IbusRepository {
  update: (
    busId: string,
    data: Partial<busEntity>
  ) => Promise<IBusModel | null>;
  create: (
    data: Omit<busEntity, "_id"> & {
      _id?: string;
    }
  ) => Promise<IBusModel | null>;

  findOne: (busId: string) => Promise<IBusModel | null>;
  findOneWithBusNumber: (busNumber: string) => Promise<IBusModel | null>;
}
