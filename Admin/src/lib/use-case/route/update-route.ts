import { IrouteRepository } from "../../../app/repository";
import { routeEntity } from "../../entities";
import {
IUpdateRouteUseCase,IUpdateRouteUseCaseArgs
} from "../interface/route-use-case";

export class UpdateRouteUseCase implements IUpdateRouteUseCase {
  constructor(private routeRepository: IrouteRepository) {}
    execute(args: IUpdateRouteUseCaseArgs): Promise<routeEntity | null> {
        throw new Error("Method not implemented.");
    }
}
