export interface travellHistoryEntity {
  _id?: string;
  userId: string;
  travells: {
    bookingId: string;
    status: string;
  }[];
}

