export interface ITravellHistory {
  _id?: string;
  userId: string;
  travells: {
    bookingId: string;
    status: string;
  }[];
}

export class TravellHistory {
  _id?: string;
  userId: string;
  travells: {
    bookingId: string;
    status: string;
  }[];
  constructor({ _id, travells, userId }: ITravellHistory) {
    this._id = _id;
    this.travells = travells;
    this.userId = userId;
  }
}
