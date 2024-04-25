import { ISeatingPreferenceRepository } from "../../../app/repository";
import { ISeatingPreference } from "../../entities";
import { BadRequestError } from "../../util/bad-request-error";
import {
  IGetSeatingPreferenceArgs,
  IGetSeatingPreferenceUseCase,
} from "../interface/seating-preference-use-case";

export class GetSeatingPrefrenceUseCase
  implements IGetSeatingPreferenceUseCase
{
  private seatingPreferenceRepository: ISeatingPreferenceRepository;
  constructor({
    seatingPreferenceRepository,
  }: {
    seatingPreferenceRepository: ISeatingPreferenceRepository;
  }) {
    this.seatingPreferenceRepository = seatingPreferenceRepository;
  }
  async execute(
    args: IGetSeatingPreferenceArgs
  ): Promise<ISeatingPreference | null> {
    const { userId } = args;
    if (userId == undefined)
      throw new BadRequestError({
        code: 400,
        message: "Please provide userId",
      });

    const seatingPreferenceDeatail =
      await this.seatingPreferenceRepository.findOneByUserId(userId);
    return seatingPreferenceDeatail;
  }
}
