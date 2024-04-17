import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const SeatingPreferenceSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
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
