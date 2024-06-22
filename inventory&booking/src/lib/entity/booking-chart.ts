export interface bookingChartEntity {
  _id: string;
  busId: string;
  totalBookedSeats: number;
  bookedSeats: bookingChartBooking[];
  totalAvailabeSeats: number;
  travellingDate: Date;
}


export interface bookingChartBooking {
  travellorId: string;
  arrangement: string;
  rowNumber: number;
  position: string;
}