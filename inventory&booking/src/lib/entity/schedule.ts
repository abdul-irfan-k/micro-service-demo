export interface scheduleEntity {
  _id: string;
  routeId: string;
  departureTime: timeDetails;
  arrivalTime: timeDetails;
  journeyDuration: number;
  availableDays: string;
  isTemprerlyStoped?: boolean;
  schedule: schedule[];
}

interface schedule {
  stopId: string;
  arrivalTime: timeDetails;
  departureTime: timeDetails;
}
interface timeDetails {
  hour: string;
  minutes: string;
}
