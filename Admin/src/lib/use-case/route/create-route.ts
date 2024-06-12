import { IrouteRepository } from "@lib/app/repository";
import { travellRouteEntity } from "../../entities";
import {
  ICreateTravellRouteUseCase,
  ICreateTravellRouteUseCaseArgs,
} from "../interface/route-use-case";

export class CreateTravellRouteUseCase implements ICreateTravellRouteUseCase {
  constructor(private routeRepository: IrouteRepository) {}
  async execute(args: ICreateTravellRouteUseCaseArgs): Promise<travellRouteEntity | null> {
    const routeDetails = await this.routeRepository.create(args);
    return routeDetails;
  }
}
