import { IrouteRepository } from "@lib/app/repository";
import { travellRouteEntity } from "../../entities";
import {
  IUpdateTravellRouteUseCase,
  IUpdateTravellRouteUseCaseArgs,
} from "../interface/route-use-case";

export class UpdateTravellRouteUseCase implements IUpdateTravellRouteUseCase {
  constructor(private routeRepository: IrouteRepository) {}
  async execute(args: IUpdateTravellRouteUseCaseArgs): Promise<travellRouteEntity | null> {
    const updatedRouteDetails = await this.routeRepository.update(
      args._id,
      args
    );
    return updatedRouteDetails;
  }
}
