import { IBookingChartModel, BookingChartModel } from "../database/schema";
import { bookingChartBooking, bookingChartEntity } from "../../entity";

export const bookingChartRepository: IbookingChartRepository = {
  create: async (data) => {
    const bookingChart = new BookingChartModel(data);
    await bookingChart.save();
    return bookingChart.toJSON();
  },
  update: async (id, data) => {
    const bookingChart = await BookingChartModel.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      }
    );
    return bookingChart;
  },
  pushBooking: async (_id, data) => {
    const updatedBookingChart = await BookingChartModel.findOneAndUpdate(
      { _id },
      { $push: { bookedSeats: data } },
      { new: true }
    );
    return updatedBookingChart;
  },
  findOneByBusIdAndDate: async (
    busId: string,
    travellingDate: Date
  ): Promise<IBookingChartModel | null> => {
    const bookingChart = await BookingChartModel.findOne({
      busId: busId,
      travellingDate,
    });
    return bookingChart;
  },
};

export interface IbookingChartRepository {
  create: (
    data: Omit<bookingChartEntity, "_id"> & { _id?: string }
  ) => Promise<bookingChartEntity>;
  update: (
    id: string,
    data: Partial<Omit<bookingChartEntity, "_id">>
  ) => Promise<bookingChartEntity | null>;
  pushBooking: (
    id: string,
    data: bookingChartBooking
  ) => Promise<bookingChartEntity | null>;
  findOneByBusIdAndDate: (
    busId: string,
    travellingDate: Date
  ) => Promise<IBookingChartModel | null>;
}
