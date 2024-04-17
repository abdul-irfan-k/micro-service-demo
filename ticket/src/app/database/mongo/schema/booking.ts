import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid"


const bookingSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
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
    seat: {
      type: [
        {
          arrangement: { type: String, required: true }, // left or right
          rowNumber: { type: Number, required: true },
          position: { type: String, required: true }, // window or Aisle or middle
        },
      ],
      default: [],
    },
    coupon: { type: String },
    rewards: { type: String },
  },
  { timestamps: true }
);

interface IBookingSchema {
  _id: string
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
