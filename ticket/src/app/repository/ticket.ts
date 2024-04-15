import {
  BookingModel,
  IBookingModel,
  RouteModel,
} from "../database/mongo/schema";

export const ticketRepository = {
  findOne: async (_id: string) => {
    return await BookingModel.findOne({ _id });
  },

  update: async (_id: string, data: any) => {
    const ticket = await BookingModel.findOneAndUpdate({ _id }, data);
    return ticket;
  },

  create: async (data: any) => {
    const ticket = new BookingModel(data);
    await ticket.save();
    return ticket;
  },

  searchAvailableBuses: async (query: {
    startingPlace: string;
    destinationPlace: string;
    currentDayShortForm: string;
  }) => {
    const { destinationPlace, startingPlace, currentDayShortForm } = query;
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
                      $eq: [`$${currentDayShortForm}.isAvailable`, "true"],
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
  },
};
