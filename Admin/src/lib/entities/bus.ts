export interface busEntity {
  _id: string;
  name: string;
  number: string;
  scheduleId?: string;
  travellorId?: string;
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


