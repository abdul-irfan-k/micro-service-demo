import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const SeatingPreferenceSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    userId: { type: String, required: true },
    seat: {
      type: {
        preferedSeatType: { type: String, required: true }, // window asile middle
        preferedLocation: { type: String, required: true }, // front middle rear
      }
    },
  },
  { timestamps: true }
);

interface ISeatingPreferenceSchema {
 _id:number
  userId: string
  seat?:
    | {
        preferedSeatType: string;
        preferedLocation: string;
      }
    | null
    | undefined;
}
export type ISeatingPreferenceModel = ISeatingPreferenceSchema;
const SeatingPreferenceModel = mongoose.model<ISeatingPreferenceModel>(
  "SeatingPreference",
  SeatingPreferenceSchema
);
export default SeatingPreferenceModel;
