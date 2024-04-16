import { RouteModel, TravellModel } from "../database/mongo/schema";

export const busRepository = {
  searchAvailableBuses: async (query: {
    startingPlace: string;
    destinationPlace: string;
    dayShortForm: string;
  }) => {
    const { destinationPlace, startingPlace, dayShortForm } = query;
    const data = await RouteModel.aggregate([
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
  getBusesAvailabeAndBookedSeatsChart: async ({ busId }: { busId: string }) => {
    const data = await TravellModel.aggregate([
      {
        $match: { $expr: { $eq: ["$_id", busId] } },
      },
    ]);
    return data;
  },
};

export interface IbusRepository {
  searchAvailableBuses: (query: {
    startingPlace: string;
    destinationPlace: string;
    dayShortForm: string;
  }) => Promise<any[]>;
  getBusesAvailabeAndBookedSeatsChart: ({
    busId,
  }: {
    busId: string;
  }) => Promise<any[]>;
}
