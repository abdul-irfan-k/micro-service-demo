import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const seatingLayoutSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    name: { type: String, required: true },
    layoutImageSrc: { type: [String], default: [] },
    seatingConfiguration: { type: String, required: true },
    totalSeats: { type: Number, required: true },
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

interface IseatingLayoutSchema {
  _id:string
  name: string;
  layoutImageSrc: string[];
  seatingConfiguration: string;
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
  totalSeats: number;
}
export interface ISeatingLayoutModel extends IseatingLayoutSchema {}
const SeatingLayoutModel = mongoose.model<ISeatingLayoutModel>(
  "SeatingLayout",
  seatingLayoutSchema
);
export default SeatingLayoutModel;
