import { IrouteRepository } from "../../../app/repository";
import { routeEntity } from "../../entities";
import {
  IGetRouteUseCase,
  IGetRouteUseCaseArgs,
} from "../interface/route-use-case";

export class GetRouteUseCase implements IGetRouteUseCase {
  constructor(private routeRepository: IrouteRepository) {}
  async execute(args: IGetRouteUseCaseArgs): Promise<routeEntity | null> {
    const routeDetails = await this.routeRepository.findOne(args._id) 
    return routeDetails
  }
}
