import { IscheduleRepository } from "@lib/app/repository";
import {
  IUpdateScheduleUseCase,
  IUpdateSheduleUseCaseArgs,
} from "../interface/scehdule-use-case";
import { scheduleEntity } from "@lib/entity";

export class UpdateScheduleUseCase implements IUpdateScheduleUseCase {
  constructor(private scheduleRepository: IscheduleRepository) {}
  async execute(
    args: IUpdateSheduleUseCaseArgs
  ): Promise<scheduleEntity | null> {
    const updatedRouteDetails = await this.scheduleRepository.update(
      args._id,
      args
    );
    return updatedRouteDetails;
  }
}
