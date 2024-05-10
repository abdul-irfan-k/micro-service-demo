import { IrouteRepository } from "../../../app/repository";
import { routeEntity } from "../../entities";
import {
  ICreateRouteUseCase,
  ICreateRouteUseCaseArgs,
} from "../interface/route-use-case";

export class CreateRouteUseCase implements ICreateRouteUseCase {
  constructor(private routeRepository: IrouteRepository) {}
  execute(args: ICreateRouteUseCaseArgs): Promise<routeEntity | null> {
    
  }
}
