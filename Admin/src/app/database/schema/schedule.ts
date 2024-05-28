import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { scheduleEntity } from "../../../lib/entities";

const timeSchema = new mongoose.Schema(
  {
    hour: { type: String, required: true },
    minutes: { type: String, required: true },
  },
  { _id: false }
);

const specialScheduleSchema = new mongoose.Schema(
  {
    routeId: { type: String, required: true },
    departureTime: timeSchema,
    arrivalTime: timeSchema,
  },
  { _id: false }
);

const dayScheduleSchema = new mongoose.Schema(
  {
    isAvailable: { type: String, default: false },
    specialSchedule: specialScheduleSchema,
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
    availableDays: {
      sun: dayScheduleSchema,
      mon: dayScheduleSchema,
      tue: dayScheduleSchema,
      wed: dayScheduleSchema,
      thu: dayScheduleSchema,
      fri: dayScheduleSchema,
      sat: dayScheduleSchema,
    },
    isTemprerlyStoped: { type: Boolean, default: false },
    temprerlySeviceAvailableDate: { type: Date },
  },
  { timestamps: true }
);

export interface IScheduleModel extends scheduleEntity {}
export const ScheduleModel = mongoose.model<IScheduleModel>(
  "Schdule",
  scheduleSchema
);
