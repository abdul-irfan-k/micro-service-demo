import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid"

const scheduleSchema = new mongoose.Schema(
  {
    _id:{type:String,default:uuidv4},
    routeId: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    availableDays: {
      sun: {
        type: {
          isAvailable: { type: String, default: false },
          specialRouteId: { type: String },
        },
        required: true,
      },
      mon: {
        type: {
          isAvailable: { type: String, default: false },
          specialRouteId: { type: String },
        },
        required: true,
      },
      tue: {
        type: {
          isAvailable: { type: String, default: false },
          specialRouteId: { type: String },
        },
        required: true,
      },
      wed: {
        type: {
          isAvailable: { type: String, default: false },
          specialRouteId: { type: String },
        },
        required: true,
      },
      thu: {
        type: {
          isAvailable: { type: String, default: false },
          specialRouteId: { type: String },
        },
        required: true,
      },
      fri: {
        type: {
          isAvailable: { type: String, default: false },
          specialRouteId: { type: String },
        },
        required: true,
      },
      sat: {
        type: {
          isAvailable: { type: String, default: false },
          specialRouteId: { type: String },
        },
        required: true,
      },
    },
    isTemprerlyStoped: { type: Boolean, default: false },
    temprerlySeviceAvailableDate: { type: Date },
  },
  { timestamps: true }
);

interface IscheduleSchema {
  _id:string
  rotueId: string;
  busId: string;
  departureTime: Date;
  arrivaleTime: Date;
  availableDays?:
    | {
        sun: {
          isAvailable: string;
          specialRouteId?: string | null | undefined;
        };
        mon: {
          isAvailable: string;
          specialRouteId?: string | null | undefined;
        };
        tue: {
          isAvailable: string;
          specialRouteId?: string | null | undefined;
        };
        wed: {
          isAvailable: string;
          specialRouteId?: string | null | undefined;
        };
        thu: {
          isAvailable: string;
          specialRouteId?: string | null | undefined;
        };
        fri: {
          isAvailable: string;
          specialRouteId?: string | null | undefined;
        };
        sat: {
          isAvailable: string;
          specialRouteId?: string | null | undefined;
        };
      }
    | null
    | undefined;
  isTemprerlyStoped: boolean;
  temprerlySeviceAvailableDate?: Date | null | undefined;
}
export interface IScheduleModel extends IscheduleSchema {}
export const ScheduleModel = mongoose.model<IScheduleModel>("Schdule", scheduleSchema);
