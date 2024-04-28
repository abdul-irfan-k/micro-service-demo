export interface ITravell {
  busId: string;
  routeId: string;
  travellorId: string;
  totalBookedSeats: number;
  bookedSeats: {
    travellorId: string;
    arrangement: string;
    rowNumber: number;
    position: string;
  }[];
  totalAvailabeSeats: number;
  travellingDate: Date;
}

export class Travell {
  busId: string;
  routeId: string;
  travellorId: string;
  totalBookedSeats: number;
  bookedSeats: {
    travellorId: string;
    arrangement: string;
    rowNumber: number;
    position: string;
  }[];
  totalAvailabeSeats: number;
  travellingDate: Date;
  constructor({
    bookedSeats,
    busId,
    routeId,
    totalAvailabeSeats,
    totalBookedSeats,
    travellingDate,
    travellorId,
  }: ITravell) {
    this.busId = busId;
    this.routeId = routeId;
    this.bookedSeats = bookedSeats;
    this.totalAvailabeSeats = totalAvailabeSeats;
    this.totalBookedSeats = totalBookedSeats;
    this.travellingDate = travellingDate;
    this.travellorId = travellorId;
  }
}
