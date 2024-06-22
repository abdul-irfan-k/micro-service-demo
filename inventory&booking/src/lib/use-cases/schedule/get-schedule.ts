import { IscheduleRepository } from "@lib/app/repository";
import {
  IGetScheduleUseCase,IGetScheduleUseCaseArgs
} from "../interface/scehdule-use-case";
import { scheduleEntity } from "@lib/entity";

export class GetScheduleUseCase implements IGetScheduleUseCase {
  constructor(private scheduleRepository: IscheduleRepository) {}
  async execute(args: IGetScheduleUseCaseArgs): Promise<scheduleEntity | null> {
    const routeDetails = await this.scheduleRepository.findOne(args._id) 
    return routeDetails
  }
}
