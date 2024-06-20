import { travellRouteEntity } from "@lib/entity";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const placeSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4() },
  name: { type: String, required: true },
  location: {
    type: {
      locationType: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    required: true,
  },
});

const travellRouteSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4() },
    routeName: { type: String, required: true },
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

export interface ITravellRouteModel extends travellRouteEntity {}
export const TravellRouteModel = mongoose.model<ITravellRouteModel>(
  "TravellRoute",
  travellRouteSchema
);
