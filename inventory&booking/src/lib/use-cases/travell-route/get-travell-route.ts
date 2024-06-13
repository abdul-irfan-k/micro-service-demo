import { travellRouteEntity } from "@lib/entity";
import {
  IGetTravellRouteUseCase,
  IGetTravellRouteUseCaseArgs,
} from "../interface/travell-route-use-case";
import { ITravellRouteRepository } from "@lib/app/repository/travell-route";

export class GetTravellRouteUseCase implements IGetTravellRouteUseCase {
  constructor(private travellRouteRepository: ITravellRouteRepository) {}
  execute(
    args: IGetTravellRouteUseCaseArgs
  ): Promise<travellRouteEntity | null> {
    throw new Error("Method not implemented.");
  }
}
