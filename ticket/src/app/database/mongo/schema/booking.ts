import mongoose, { Document } from "mongoose";
const bookingSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    routeId: { type: String, required: true },
    busId: { type: String, required: true },
    scheduleId: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String },
    totalMembers: { type: Number, required: true },
    memberDetails: [
      {
        name: { type: String, required: true },
        age: { type: String, required: true },
        gender: { type: String, required: true },
      },
    ],
    travellingDate: { type: Date, required: true },
    departurePlace: { type: String, required: true },
    destinationPlace: { type: String, required: true },
    seatDetail: {},
    coupon: { type: String },
    rewards: { type: String },
  },
  { timestamps: true }
);

interface IBookingSchema {
  userId: string;
  routeId: string;
  busId: string;
  scheduleId: string;
  price: number;
  status?: string;
  totalMembers: number;
  memberDetails: Array<{
    name: string;
    age: string;
    gender: string;
  }>;
  travellingDate: Date;
  departurePlace: string;
  destinationPlace: string;
  seatDetail?: any;
  coupon?: string;
  rewards?: string;
}
export interface IBookingModel extends IBookingSchema {}
const BookingModel = mongoose.model<IBookingModel>("Booking", bookingSchema);
export default BookingModel;
