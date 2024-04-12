import mongoose, { Document } from "mongoose";
const busSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: Number, required: true },
    travellorId: { type: String, required: true },
    stops: [
      {
        placeName: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

interface IbusSchema {
  startPlace: string;
  destinationPlace: string;
  stops: Array<{
    placeName: string;
  }>;
  distance?: number;
}
export interface IBusModel extends IbusSchema {}
const BusModel = mongoose.model<IBusModel>("Bus", busSchema);
export default BusModel;
