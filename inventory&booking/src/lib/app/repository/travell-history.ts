import { RequireAtLeastOne } from "@lib/util/type-helper";

import { TravellHistoryModel, ITravellHistoryModel } from "../database/schema";
import { travellHistoryEntity } from "@lib/entity/travell-history";

export const travellHistoryRepository: ItravellHistoryRepository = {
  create: async (data) => {
    const travellHistory = new TravellHistoryModel(data);
    await travellHistory.save();
    return travellHistory;
  },
  update: async (id, data) => {
    const updatedTravellHistory = await TravellHistoryModel.findOneAndUpdate(
      { _id: id },
      data,
      { new: true }
    );
    return updatedTravellHistory;
  },
  getTravellHistory: async (userId) => {
    const travellHistory = await TravellHistoryModel.aggregate([
      {
        $match: {
          $expr: { $eq: ["$userId", userId] },
        },
      },
      {
        $lookup: {
          from: "Booking",
          let: {
            bookingId: "$travells.bookingId",
          },
          pipeline: [
            {
              $match: {
                $expr: { $in: ["$_id", "$$bookingId"] },
              },
            },
          ],
          as: "BookingDetail",
        },
      },
    ]);
    return travellHistory;
  },
  findOne: async (userId): Promise<ITravellHistoryModel | null> => {
    const travellHistory = await TravellHistoryModel.findOne({ userId });
    return travellHistory;
  },
};

export interface ItravellHistoryRepository {
  create: (
    data: Omit<travellHistoryEntity, "_id"> & { _id?: string }
  ) => Promise<ITravellHistoryModel>;
  update: (
    id: string,
    data: Partial<Omit<travellHistoryEntity, "_id">>
  ) => Promise<ITravellHistoryModel | null>;
  getTravellHistory: (userId: string) => Promise<any[]>;
  findOne: (
    data: RequireAtLeastOne<Pick<travellHistoryEntity, "_id" | "userId">>
  ) => Promise<ITravellHistoryModel | null>;
}
