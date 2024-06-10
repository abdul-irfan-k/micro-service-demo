import { ISeatingPreference } from "../../entities";
import {
  SeatingPreferenceModel,
  ISeatingPreferenceModel,
} from "../database/schema";

export const seatingPreferenceRepository: ISeatingPreferenceRepository = {
  findOneByUserId: async (userId: string) => {
    const user = await SeatingPreferenceModel.findOne({ userId });
    return user;
  },

  updateOneByUserId: async (userId: string, data: any) => {
    const user = await SeatingPreferenceModel.findOneAndUpdate(
      { userId },
      data,
      {
        new: true,
      }
    );
    return user;
  },

  create: async (data: ISeatingPreference) => {
    const user = new SeatingPreferenceModel(data);
    await user.save();
    return user;
  },
};

export interface ISeatingPreferenceRepository {
  findOneByUserId: (userId: string) => Promise<ISeatingPreferenceModel | null>;
  updateOneByUserId: (
    userId: string,
    data: any
  ) => Promise<ISeatingPreferenceModel | null>;
  create: (data: ISeatingPreference) => Promise<ISeatingPreferenceModel | null>;
}
