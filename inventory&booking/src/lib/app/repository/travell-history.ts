import { ITravellHistory } from "../../entity/travell-history";
import {
  TravellHistoryModel,
  ITravellHistoryModel,
} from "../database/schema";

export const travellHistoryRepository: ItravellHistoryRepository = {
  create: async (data: ITravellHistory): Promise<ITravellHistoryModel> => {
    const travellHistory = new TravellHistoryModel(data);
    await travellHistory.save();
    return travellHistory;
  },
  update: async (
    id: string,
    data: any
  ): Promise<ITravellHistoryModel | null> => {
    const updatedTravellHistory = await TravellHistoryModel.findOneAndUpdate(
      { _id: id },
      data,
      { new: true }
    );
    return updatedTravellHistory;
  },
  getTravellHistory: async (userId: string) => {
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
  findOne: async (userId):Promise<ITravellHistoryModel | null> => {
    const travellHistory = await TravellHistoryModel.findOne({ userId });
    return travellHistory
  },
};

export interface ItravellHistoryRepository {
  create: (data: ITravellHistory) => Promise<ITravellHistoryModel>;
  update: (id: string, data: any) => Promise<ITravellHistoryModel | null>;
  getTravellHistory: (userId: string) => Promise<any[]>;
  findOne: (userId: any) => Promise<ITravellHistoryModel | null>
}
