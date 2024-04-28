import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid"

const travellorSchema = new mongoose.Schema(
  {
    _id:{type:String,default:uuidv4},
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
  _id:string
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
