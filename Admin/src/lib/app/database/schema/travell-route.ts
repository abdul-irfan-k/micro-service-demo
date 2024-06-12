import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const placeSchema = new mongoose.Schema(
  {
    placeName: { type: String, required: true },
    coordinate: {
      type: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
      required: true,
    },
    distanceFromStart: { type: Number },
  },
  { _id: false }
);

const routeSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4() },
    startPlace: { type: placeSchema, required: true },
    destinationPlace: { type: placeSchema, required: true },
    distance: { type: Number },
    stops: {
      type: [placeSchema],
      default: [],
    },
  },
  { timestamps: true }
);

interface IrouteSchema {
  _id: string;
  routeName: string;

  startPlace: placeDetails;
  destinationPlace: placeDetails;
  stops: Array<placeDetails>;
}

interface placeDetails {
  placeName:string
  coordinate:coordinates
  distanceFromStart?:string
}

interface coordinates {
  lat: number;
  lng: number;
}


export interface ITravellRouteModel extends IrouteSchema {}
export const TravellRouteModel = mongoose.model<ITravellRouteModel>(
  "TravellRoute",
  routeSchema
);
