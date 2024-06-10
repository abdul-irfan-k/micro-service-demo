import { ISeatingPreferenceRepository } from "../../app/repository";
import { ISeatingPreference } from "../../entities";
import { BadRequestError } from "../../util/bad-request-error";
import {
  IUpdateSeatingPreferenceArgs,
  IUpdateSeatingPreferenceUseCase,
} from "../interface/seating-preference-use-case";



export class UpdateSeatingPreferenceUseCase
  implements IUpdateSeatingPreferenceUseCase
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
    args: IUpdateSeatingPreferenceArgs
  ): Promise<ISeatingPreference | null> {
    const { userId } = args;
    if (userId == undefined)
      throw new BadRequestError({
        code: 400,
        message: "Please provide userId",
      });

    const updatedSeatingPreferenceDeatail =
      await this.seatingPreferenceRepository.updateOneByUserId(userId, args);
    return updatedSeatingPreferenceDeatail;
  }
}
