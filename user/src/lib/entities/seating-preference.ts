export interface ISeatingPreference {
  userId: string
  seat?:
    | {
        preferedSeatType: string;
        preferedLocation: string;
      }
    | null
    | undefined;
}

export interface ISeatingPreferenceDetails extends ISeatingPreference {
    _id:string
}