import { bookingChartEntity, travellHistoryEntity } from "@/lib/entity";
import {
  IUpdateTravellHistoryUseCase,
  IUpdateTravellHistoryUseCaseArgs,
} from "../interface/travell-history-use-case";
import { ItravellHistoryRepository } from "@/lib/app/repository";

export class UpdateTravellHistoryUseCase
  implements IUpdateTravellHistoryUseCase
{
  constructor(private travellHistoryRepository: ItravellHistoryRepository) {}
  async execute(
    args: IUpdateTravellHistoryUseCaseArgs
  ): Promise<travellHistoryEntity | null> {
    const travellHistory = await this.travellHistoryRepository.findOne({
      userId: args.userId,
    });
    if (travellHistory == null) {
      //@ts-ignore
      let travells = [];
      if (args.travells) travells = args.travells;
      const newTravellHistory = this.travellHistoryRepository.create({
        userId: args.userId,
        //@ts-ignore
        travells,
      });
      return newTravellHistory;
    } else {
      const updatedTravells = travellHistory.travells;
      if (args.travells) updatedTravells.push(args.travells[0]);
      const updatedTravellHistory = this.travellHistoryRepository.update(
        args.userId,
        { travells: updatedTravells }
      );
      return updatedTravellHistory;
    }
  }
}
