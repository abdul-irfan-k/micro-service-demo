export interface scheduleEntity {
  _id: string;
  rotueId: string;
  busId: string;
  departureTime: { hour: string; minutes: string };
  arrivaleTime: { hour: string; minutes: string };
  journeyDuration: string;
  availableDays: {
    sun: daySchedule;
    mon: daySchedule;
    tue: daySchedule;
    wed: daySchedule;
    thu: daySchedule;
    fri: daySchedule;
    sat: daySchedule;
  };
  isTemprerlyStoped: boolean;
  temprerlySeviceAvailableDate?: Date | null | undefined;
}

type specialSchedule =
  | {
      routeId: string;
      departureTime?: { hour: string; minutes: string } | null | undefined;
      arrivalTime?: { hour: string; minutes: string } | null | undefined;
    }
  | null
  | undefined;

type daySchedule = {
  isAvailable: boolean;
  specialSchedule: specialSchedule;
};
