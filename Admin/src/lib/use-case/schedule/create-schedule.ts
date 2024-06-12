import { IscheduleRepository } from "@lib/app/repository";
import { scheduleEntity } from "../../entities";
import {
  ICreateScheduleUseCase,
  ICreateScheduleUseCaseArgs,
} from "../interface";

export class CreateScheduleUseCase implements ICreateScheduleUseCase {
  constructor(private scheduleRepository: IscheduleRepository) {}
  async execute(
    args: ICreateScheduleUseCaseArgs
  ): Promise<scheduleEntity | null> {
    const scheduleDetails = await this.scheduleRepository.create(args);
    return scheduleDetails;
  }
}
