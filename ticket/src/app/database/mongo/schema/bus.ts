import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid"

const busSchema = new mongoose.Schema(
  {
    _id:{type:String,default:uuidv4},
    name: { type: String, required: true },
    number: { type: Number, required: true },
    routeId: { type: String, required: true },
    scheduleId: { type: String, required: true },
    travellorId: { type: String, required: true },
    seatingLayoutId: { type: String, required: true },
    type: { type: String, required: true }, // sleeper ac non-ac
    totalSeats: { type: Number, required: true },
  },
  { timestamps: true }
);

interface IbusSchema {
  _id:string
  name: string;
  number: number;
  routeId: string;
  scheduleId: string;
  travellorId: string;
  seatingLayoutId: string;
  totalSeats: number;
}
export interface IBusModel extends IbusSchema {}
const BusModel = mongoose.model<IBusModel>("Bus", busSchema);
export default BusModel;
