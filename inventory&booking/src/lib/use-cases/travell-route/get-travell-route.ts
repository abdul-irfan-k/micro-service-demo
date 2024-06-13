import { travellRouteEntity } from "@lib/entity";
import {
  IGetTravellRouteUseCase,
  IGetTravellRouteUseCaseArgs,
} from "../interface/travell-route-use-case";
import { ITravellRouteRepository } from "@lib/app/repository/travell-route";

export class GetTravellRouteUseCase implements IGetTravellRouteUseCase {
  constructor(private travellRouteRepository: ITravellRouteRepository) {}
  async execute(
    args: IGetTravellRouteUseCaseArgs
  ): Promise<travellRouteEntity | null> {
    //@ts-ignore
    const { _id, routeName, destinationPlace, startPlace } = args;
    //@ts-ignore
    const { maxDistance, minDistance } = args;

    const isSearchWithPlace = _id != undefined || routeName != undefined;
    if (isSearchWithPlace) {
      const args = _id != undefined ? { _id } : { routeName };
      const routeDetails = await this.travellRouteRepository.findOne(args);
      return routeDetails;
    } else {
      const routeDetails = await this.travellRouteRepository.findOneByPlaces({
        startPlace,
        destinationPlace,
        maxDistance,
        minDistance,
      });
      return routeDetails;
    }
  }
}
