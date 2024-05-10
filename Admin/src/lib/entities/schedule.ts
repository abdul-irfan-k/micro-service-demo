export interface scheduleEntity {
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