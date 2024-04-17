import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid"

const routeSchema = new mongoose.Schema(
  {
    _id:{type:String,default:uuidv4},
    startPlace: { type: String, required: true },
    destinationPlace: { type: String, required: true },
    distance: { type: Number },
    stops: [
      {
        address: { type: String, required: true },
        name: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

interface IrouteSchema {
  _id:string
  startPlace: string;
  destinationPlace: string;
  stops: Array<{
    address: string;
    name:string
  }>;
  distance?: number;
}
export interface IRouteModel extends IrouteSchema {}
const routeModel = mongoose.model<IRouteModel>("Route", routeSchema);
export default routeModel;
