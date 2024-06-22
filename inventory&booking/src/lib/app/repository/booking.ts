import { BookingModel, IBookingModel } from "../database/schema";
import {bookingEntity} from '@lib/entity'
export const bookingRespository: IbookingRespository = {
  getBookedUpComingTickets: async ({ userId }: { userId: string }) => {
    const tickets = await BookingModel.aggregate([
      {
        $match: {
          $expr: { $eq: ["$userId", userId] },
        },
      },
      {
        $lookup: {
          from: "Bus",
          localField: "$busId",
          foreignField: "$_id",
          pipeline: [
            {
              $lookup: {
                from: "Schdules",
                localField: "$scheduleId",
                foreignField: "$_id",
                as: "Schedule",
              },
            },
            {
              $addFields: {
                Schedule: { $arrayElemAt: ["$Schedule", 0] },
              },
            },
          ],
          as: "BusDetail",
        },
      },
    ]);
    return tickets;
  },

  getTicketDetail: async ({ ticketId }: { ticketId: string }) => {
    const ticket = await BookingModel.aggregate([
      {
        $match: {
          $expr: { $eq: ["$_id", ticketId] },
        },
      },
      {
        $lookup: {
          from: "Bus",
          localField: "$busId",
          foreignField: "$_id",
          pipeline: [
            {
              $lookup: {
                from: "Schdules",
                localField: "$scheduleId",
                foreignField: "$_id",
                as: "Schedule",
              },
            },
            {
              $addFields: {
                Schedule: { $arrayElemAt: ["$Schedule", 0] },
              },
            },
          ],
          as: "BusDetail",
        },
      },
    ]);
    return ticket;
  },
  create: async (data): Promise<IBookingModel> => {
    const ticket = new BookingModel(data);
    await ticket.save();
    return ticket.toJSON();
  },
  update: async(_id, data) => {
    const updatedBookingDetails = await BookingModel.findOneAndUpdate(
      { _id },
      data,
      { new: true }
    );
    return updatedBookingDetails
  },
  
};

export interface IbookingRespository {
  getBookedUpComingTickets: ({ userId }: { userId: string }) => Promise<any[]>;
  getTicketDetail: ({ ticketId }: { ticketId: string }) => Promise<any[]>;
  create: (data: any) => Promise<IBookingModel | null>;
  update: (
    bookingId: string,
    data: Partial<Omit<bookingEntity, "_id">>
  ) => Promise<bookingEntity | null>;
}
