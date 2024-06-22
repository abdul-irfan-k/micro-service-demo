import { RequireAtLeastOne } from "@/lib/util/type-helper";
import { BusModel, TravellRouteModel, TravellModel } from "../database/schema";
import { busEntity } from "@/lib/entity/bus";

export const busRepository: IbusRepository = {
  searchAvailableBuses: async (query) => {
    const { destinationPlace, startingPlace, dayShortForm } = query;
    const data = await TravellRouteModel.aggregate([
      {
        $match: {
          $and: [
            { $expr: { $in: [startingPlace, "$stops"] } },
            { $expr: { $in: [destinationPlace, "$stops"] } },
          ],
        },
      },
      {
        $lookup: {
          from: "Schdules",
          localField: "$routeId",
          foreignField: "$_id",
          pipeline: [
            {
              $match: {
                $and: [
                  { $expr: { $eq: ["$isTemprerlyStoped", "false"] } },
                  {
                    $expr: {
                      $eq: [`$${dayShortForm}.isAvailable`, "true"],
                    },
                  },
                ],
              },
            },
            {
              $lookup: {
                from: "Bus",
                localField: "$busId",
                foreignField: "$_id",
                as: "BusDetail",
              },
            },
            {
              $addFields: {
                BusDetail: { $arrayElemAt: ["$BusDetail", 0] },
              },
            },
          ],

          as: "schdules",
        },
      },
    ]);
    return data;
  },
  getBusesAvailabeAndBookedSeatsChart: async ({ _id, number }) => {
    const data = await TravellModel.aggregate([
      {
        $match: { $expr: { $eq: ["$_id", _id] } },
      },
    ]);
    return data;
  },
  //@ts-ignore
  getBusDetail: async ({ _id }) => {
    const data = await BusModel.aggregate([
      {
        $match: { $expr: { $eq: ["$_id", _id] } },
      },
    ]);
    //@ts-ignore
    return data;
  },

  create: async (args) => {
    const busDetails = new BusModel(args);
    return await busDetails.save();
  },

  update: async (_id, data) => {
    const updatedBusDetails = await BusModel.findOneAndUpdate({ _id }, data, {
      new: true,
    });
    return updatedBusDetails;
  },
};

export interface IbusRepository {
  searchAvailableBuses: (query: {
    startingPlace: string;
    destinationPlace: string;
    dayShortForm: string;
  }) => Promise<any[]>;
  getBusesAvailabeAndBookedSeatsChart: (
    args: RequireAtLeastOne<Pick<busEntity, "_id" | "number">>
  ) => Promise<any[]>;
  getBusDetail: (
    busId: RequireAtLeastOne<Pick<busEntity, "_id" | "number">>
  ) => Promise<busEntity | null>;
  create: (
    busId: Omit<busEntity, "_id"> & { _id?: string }
  ) => Promise<busEntity | null>;
  update: (
    busId: string,
    data: Partial<Omit<busEntity, "_id">>
  ) => Promise<busEntity | null>;
}
