import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const busSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4() },
    name: { type: String, required: true },
    number: { type: String, required: true },
    scheduleId: { type: String },
    travellorId: { type: String },
    type: { type: String, required: true }, // sleeper ac non-ac
    layoutImageSrc: { type: [String], default: [] },
    seatingConfiguration: { type: String, required: true }, // 3*2 or  2*2
    leftSeatingArrangement: {
      seatsPerRow: { type: Number, required: true },
      totalRow: { type: Number, required: true },
      seatType: { type: String, required: true },
      price: { type: Number, required: true },
      seatImageSrc: { type: [String], default: [] },
    },
    rightSeatingArrangement: {
      seatsPerRow: { type: Number, required: true },
      totalRow: { type: Number, required: true },
      seatType: { type: String, required: true },
      price: { type: Number, required: true },
      seatImageSrc: { type: [String], default: [] },
    },
  },
  { timestamps: true }
);

interface IbusSchema {
  _id: string;
  name: string;
  number: string;
  scheduleId?: string;
  travellorId?: string;
  seatingLayoutId: string;
  layoutImageSrc: string[];
  seatingConfiguration: string;
  totalSeats: number;
  leftSeatingArrangement?:
    | {
        seatsPerRow: number;
        totalRow: number;
        seatType: string;
        price: number;
        seatImageSrc: string[];
      }
    | null
    | undefined;
  rightSeatingArrangement?:
    | {
        seatsPerRow: number;
        totalRow: number;
        seatType: string;
        price: number;
        seatImageSrc: string[];
      }
    | null
    | undefined;
}
export interface IBusModel extends IbusSchema {}
export const BusModel = mongoose.model<IBusModel>("Bus", busSchema);