import mongoose, { Document } from "mongoose";
const travellorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: Number, required: true },
    logoImageSrc: { type: String, required: true },
    availableBuses: {
      type: [{ busId: { type: String, required: true } }],
      default: [],
    },
  },
  { timestamps: true }
);

interface ItravellorSchema {
  number: number;
  name: string;
  logoImageSrc: string;
  availableBuses: {
    busId: string;
  }[];
}
export interface ITravellorModel extends ItravellorSchema {}
const TravellorModel = mongoose.model<ITravellorModel>(
  "Travellor",
  travellorSchema
);
export default TravellorModel;
