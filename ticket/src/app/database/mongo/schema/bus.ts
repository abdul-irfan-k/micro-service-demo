import mongoose, { Document } from "mongoose";
const busSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: Number, required: true },
    routeId: { type: String, required: true },
    scheduleId: { type: String, required: true },
    travellorId: { type: String, required: true },
    seatingLayoutId: { type: String, required: true },
    type:{type:String,required:true}, // sleeper ac non-ac
  },
  { timestamps: true }
);

interface IbusSchema {
  name: string;
  number: number;
  routeId: string;
  scheduleId: string;
  travellorId: string;
  seatingLayoutId: string;
}
export interface IBusModel extends IbusSchema {}
const BusModel = mongoose.model<IBusModel>("Bus", busSchema);
export default BusModel;
