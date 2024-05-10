export interface busEntity {
  _id: string;
  name: string;
  number: number;
  routeId?: string;
  scheduleId?: string;
  travellorId?: string;
  seatingLayoutId: string;
  layoutImageSrc: string[];
  seatingConfiguration: string;
  totalSeats: number;
  leftSeatingArrangement?:
    | {
        seatsPerRow: number;
        totalRow: number;
        seatType: string;
        price: number;
        seatImageSrc: string[];
      }
    | null
    | undefined;
  rightSeatingArrangement?:
    | {
        seatsPerRow: number;
        totalRow: number;
        seatType: string;
        price: number;
        seatImageSrc: string[];
      }
    | null
    | undefined;
}


