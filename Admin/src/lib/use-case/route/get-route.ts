import { IrouteRepository } from "@lib/app/repository";
import { travellRouteEntity } from "../../entities";
import {
  IGetTravellRouteUseCase,
  IGetTravellRouteUseCaseArgs,
} from "../interface/route-use-case";

export class GetTravellRouteUseCase implements IGetTravellRouteUseCase {
  constructor(private routeRepository: IrouteRepository) {}
  async execute(args: IGetTravellRouteUseCaseArgs): Promise<travellRouteEntity | null> {
    const routeDetails = await this.routeRepository.findOne(args._id) 
    return routeDetails
  }
}
