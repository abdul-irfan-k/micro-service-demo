import { travellEntity } from "@lib/entities";
import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    stopId: { type: String, required: true },
  },
  { _id: false }
);

const travellRouteSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4() },
    originPlace: { type: placeSchema, required: true },
    destinationPlace: { type: placeSchema, required: true },
    distance: { type: Number },
    stops: {
      type: [placeSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export interface ITravellRouteModel extends travellEntity {}
export const TravellRouteModel = mongoose.model<ITravellRouteModel>(
  "TravellRoute",
  travellRouteSchema
);
