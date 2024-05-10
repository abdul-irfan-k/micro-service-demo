import { IrouteRepository } from "../../../app/repository";
import { routeEntity } from "../../entities";
import {
  IGetRouteUseCase,
  IGetRouteUseCaseArgs,
} from "../interface/route-use-case";

export class GetRouteUseCase implements IGetRouteUseCase {
  constructor(private routeRepository: IrouteRepository) {}
  execute(args: IGetRouteUseCaseArgs): Promise<routeEntity | null> {}
}
