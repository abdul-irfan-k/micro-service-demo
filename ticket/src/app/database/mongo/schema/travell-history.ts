import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const travellHistorySchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    userId: { type: String, required: true },
    travells: {
      type: [
        {
          bookingId: { type: String, required: true },
          status: { type: String, required: true },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

interface ItravellHistorySchema {
  _id: string;
  userId: string;
  travells: {
    bookingId: string;
    status: string;
  }[];
}
export interface ITravellHistoryModel extends ItravellHistorySchema {}
const TravellHistoryModel = mongoose.model<ITravellHistoryModel>(
  "TravellHistory",
  travellHistorySchema
);
export default TravellHistoryModel;
