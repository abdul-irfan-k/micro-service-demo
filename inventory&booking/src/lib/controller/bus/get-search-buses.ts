import { IGetBusUseCase } from "@lib/use-cases/interface/bus-use-case";
import { IGetTravellRouteUseCase } from "@lib/use-cases/interface/travell-route-use-case";
import { BadRequestError } from "@lib/util/bad-request-error";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export class GetSearchBusesController {
  constructor(
    private getBusUseCase: IGetBusUseCase,
    private getTravellRouteUseCase: IGetTravellRouteUseCase
  ) {}
  public async processRequest(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const routeDetails = await this.getTravellRouteUseCase.execute(req.body)
    return res.status(200).json(routeDetails)
  }
}
