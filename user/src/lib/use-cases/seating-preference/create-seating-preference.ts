import { ISeatingPreferenceRepository } from "../../app/repository";
import { ISeatingPreference } from "../../entities";
import { BadRequestError } from "../../util/bad-request-error";
import {
  ICreateSeatingPreferenceArgs,
  ICreateSeatingPreferenceUseCase,
} from "../interface/seating-preference-use-case";


export class CreateSeatingPreferenceUseCase
  implements ICreateSeatingPreferenceUseCase
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
    args: ICreateSeatingPreferenceArgs
  ): Promise<ISeatingPreference | null> {
   const {seat,userId} =args
    if (!userId)
      throw new BadRequestError({
        code: 400,
        message: "Please provide userid",
      });

    if(!seat) throw new BadRequestError({code:400,message:"Please provide seat details"})

    

    const seatingPreferenceDeatail =
      await this.seatingPreferenceRepository.create(args);
    return seatingPreferenceDeatail;
  }
}
