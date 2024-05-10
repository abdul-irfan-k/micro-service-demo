import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid"

const travellSchema = new mongoose.Schema(
  {
    _id:{type:String,default:uuidv4},
    busId: { type: String, required: true },
    routeId: { type: String, required: true },
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

interface ItravellorSchema {
  _id:string
  busId: string;
  routeId: string;
  totalBookedSeats: number;
  bookedSeats: {
    travellorId: string;
    arrangement: string;
    rowNumber: number;
    position: string;
  }[];
  totalAvailabeSeats: number;
  travellingDate: Date
}
export interface ITravellModel extends ItravellorSchema {}
const TravellModel = mongoose.model<ITravellModel>("Travell", travellSchema);
export default TravellModel;
