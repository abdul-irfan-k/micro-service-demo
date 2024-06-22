export interface bookingEntity {
    _id: string;
    userId: string;
    busId: string;
    price: number;
    status?: string;
    totalMembers: number;
    memberDetails: Array<{
      name: string;
      age: string;
      gender: string;
    }>;
    travellingDate: Date;
    departurePlace: { placeId: string };
    destinationPlace: { placeId: string };
    seatDetail?: Array<{
      arrangement: string;
      rowNumber: number;
      position: string;
    }>;
    coupon?: string;
    rewards?: string;
  }