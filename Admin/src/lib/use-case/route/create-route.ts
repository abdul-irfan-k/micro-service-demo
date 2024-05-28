import { IrouteRepository } from "../../../app/repository";
import { travellRouteEntity } from "../../entities";
import {
  ICreateRouteUseCase,
  ICreateRouteUseCaseArgs,
} from "../interface/route-use-case";

export class CreateRouteUseCase implements ICreateRouteUseCase {
  constructor(private routeRepository: IrouteRepository) {}
  async execute(args: ICreateRouteUseCaseArgs): Promise<travellRouteEntity | null> {
    const routeDetails = await this.routeRepository.create(args);
    return routeDetails;
  }
}
