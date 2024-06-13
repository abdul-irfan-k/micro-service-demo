import { scheduleEntity } from "@lib/entity";
import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const timeSchema = new mongoose.Schema(
  {
    hour: { type: String, required: true },
    minutes: { type: String, required: true },
  },
  { _id: false }
);

const schedule = new mongoose.Schema(
  {
    stopId: { type: String, required: true },
    arrivalTime: { type: timeSchema, required: true },
    departureTime: { type: timeSchema, required: true },
  },
  { _id: false }
);

const scheduleSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4() },
    routeId: { type: String, required: true },
    departureTime: { type: timeSchema, required: true },
    arrivalTime: { type: timeSchema, required: true },
    journeyDuration: { type: Number, required: true },
    availableDays: { type: [String], default: [] },
    isTemprerlyStoped: { type: Boolean, default: false },
    schedule: {
      type: [schedule],
      default: [],
    },
  },
  { timestamps: true }
);

export interface IScheduleModel extends scheduleEntity {}
export const ScheduleModel = mongoose.model<IScheduleModel>(
  "Schdule",
  scheduleSchema
);
