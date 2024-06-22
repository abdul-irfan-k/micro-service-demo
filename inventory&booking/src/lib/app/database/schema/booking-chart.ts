import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const bookingChartSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4() },
    busId: { type: String, required: true },
    totalBookedSeats: { type: Number, required: true },
    bookedSeats: {
      type: [
        {
          travellorId: { type: String, required: true },
          arrangement: { type: String, required: true }, // left or right
          rowNumber: { type: Number, required: true },
          position: { type: String, required: true }, // window or Aisle or middle
        },
      ],
      default: [],
    },
    totalAvailabeSeats: { type: Number, required: true },
    travellingDate: { type: Date, required: true },
  },
  { timestamps: true }
);

interface IbookingChartSchema {
  _id: string;
  busId: string;
  totalBookedSeats: number;
  bookedSeats: {
    travellorId: string;
    arrangement: string;
    rowNumber: number;
    position: string;
  }[];
  totalAvailabeSeats: number;
  travellingDate: Date;
}
export interface IBookingChartModel extends IbookingChartSchema {}
const BookingChartModel = mongoose.model<IBookingChartModel>(
  "BookingChart",
  bookingChartSchema
);
export default BookingChartModel;
