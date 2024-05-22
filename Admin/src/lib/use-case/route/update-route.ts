import { IrouteRepository } from "../../../app/repository";
import { routeEntity } from "../../entities";
import {
  IUpdateRouteUseCase,
  IUpdateRouteUseCaseArgs,
} from "../interface/route-use-case";

export class UpdateRouteUseCase implements IUpdateRouteUseCase {
  constructor(private routeRepository: IrouteRepository) {}
  async execute(args: IUpdateRouteUseCaseArgs): Promise<routeEntity | null> {
    const updatedRouteDetails = await this.routeRepository.update(
      args._id,
      args
    );
    return updatedRouteDetails;
  }
}
