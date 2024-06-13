import { travellRouteEntity } from "@lib/entity";
import {
  IUpdateTravellRouteUseCase,
  IUpdateTravellRouteUseCaseArgs,
} from "../interface/travell-route-use-case";
import { ITravellRouteRepository } from "@lib/app/repository/travell-route";

export class UpdateTravellRouteUseCase implements IUpdateTravellRouteUseCase {
  constructor(private travellRouteRepository: ITravellRouteRepository) {}
  async execute(
    args: IUpdateTravellRouteUseCaseArgs
  ): Promise<travellRouteEntity | null> {
    const updatedTravellRouteDetails = await this.travellRouteRepository.update(
      args._id,
      args
    );
    return updatedTravellRouteDetails;
  }
}
