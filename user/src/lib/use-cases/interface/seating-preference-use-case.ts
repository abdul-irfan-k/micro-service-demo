import { ISeatingPreference } from "../../entities";

interface seatingPreference {
  userId: string;
  seat?:
    | {
        preferedSeatType: string;
        preferedLocation: string;
      }
    | null
    | undefined;
}

export type ICreateSeatingPreferenceArgs = seatingPreference;
export type IUpdateSeatingPreferenceArgs = seatingPreference;
export interface IGetSeatingPreferenceArgs {
  userId: string;
}

export interface ICreateSeatingPreferenceUseCase {
  execute(
    args: ICreateSeatingPreferenceArgs
  ): Promise<ISeatingPreference | null>;
}

export interface IUpdateSeatingPreferenceUseCase {
  execute(
    args: IUpdateSeatingPreferenceArgs
  ): Promise<ISeatingPreference | null>;
}

export interface IGetSeatingPreferenceUseCase {
  execute(args: IGetSeatingPreferenceArgs): Promise<ISeatingPreference | null>;
}
