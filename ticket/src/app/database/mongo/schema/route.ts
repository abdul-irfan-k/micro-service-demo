import mongoose, { Document } from "mongoose";
const routeSchema = new mongoose.Schema(
  {
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
