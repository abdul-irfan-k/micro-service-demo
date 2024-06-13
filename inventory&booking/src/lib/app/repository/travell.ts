import { ITravellModel, TravellModel } from "../database/schema";
import { ITravell } from "../../entity";

export const travellRepository = {
  create: async (data: ITravell): Promise<ITravellModel> => {
    const travell = new TravellModel(data);
    await travell.save();
    return travell;
  },
  update: async (id: string, data: any): Promise<ITravellModel | null> => {
    const travell = await TravellModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    return travell;
  },
  findOneByBusIdAndDate: async (
    busId: string,
    travellingDate: Date
  ): Promise<ITravellModel | null> => {
    const travell = await TravellModel.findOne({
      busId: busId,
      travellingDate,
    });
    return travell;
  },
};

export interface ItravellRepository {
  create: (data: ITravell) => Promise<ITravellModel>;
  update: (id: string, data: any) => Promise<ITravellModel | null>;
  findOneByBusIdAndDate: (
    busId: string,
    travellingDate: Date
  ) => Promise<ITravellModel | null>;
}
