export interface scheduleEntity {
  _id: string;
  rotueId: string;
  busId: string;
  departureTime: { hour: string; minutes: string };
  arrivaleTime: { hour: string; minutes: string };
  journeyDuration: string;
  availableDays: string[]
  isTemprerlyStoped: boolean;
}


