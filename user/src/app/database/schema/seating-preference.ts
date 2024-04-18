import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const SeatingPreferenceSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    userId: { type: String, required: true },
    seat: {
      preferedSeatType: { type: String, required: true }, // window asile middle
      preferedLocation: { type: String, required: true }, // front middle rear
    },
  },
  { timestamps: true }
);

interface ISeatingPreferenceSchema {
  number: number;
  name: string;
  logoImageSrc: string;
  availableBuses: {
    busId: string;
  }[];
}
export interface ISeatingPreferenceModel extends ISeatingPreferenceSchema {}
const SeatingPreferenceModel = mongoose.model<ISeatingPreferenceModel>(
  "SeatingPreference",
  SeatingPreferenceSchema
);
export default SeatingPreferenceModel;
