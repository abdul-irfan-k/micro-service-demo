import { travellRouteEntity } from "@lib/entity";
import {
  ICreateTravellRouteUseCase,
  ICreateTravellRouteUseCaseArgs,
} from "../interface/travell-route-use-case";
import { ITravellRouteRepository } from "@lib/app/repository/travell-route";

export class CreateTravellRouteUseCase implements ICreateTravellRouteUseCase {
  constructor(private travellRouteRepository: ITravellRouteRepository) {}
  async execute(
    args: ICreateTravellRouteUseCaseArgs
  ): Promise<travellRouteEntity | null> {
    const travellRouteDetails = await this.travellRouteRepository.create(args);
    return travellRouteDetails;
  }
}
