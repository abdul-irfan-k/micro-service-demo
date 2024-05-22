import { IscheduleRepository } from "../../../app/repository";
import { scheduleEntity } from "../../entities";
import {
  IGetScheduleUseCase,IGetScheduleUseCaseArgs
} from "../interface";

export class GetScheduleUseCase implements IGetScheduleUseCase {
  constructor(private scheduleRepository: IscheduleRepository) {}
  async execute(args: IGetScheduleUseCaseArgs): Promise<scheduleEntity | null> {
    const routeDetails = await this.scheduleRepository.findOne(args._id) 
    return routeDetails
  }
}
