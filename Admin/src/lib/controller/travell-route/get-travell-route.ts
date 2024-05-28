import { Request, Response } from "express";
import { IGetTravellRouteUseCase } from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";
import { validationResult } from "express-validator";

export default class GetTravellRouteController {
  private getTravellRouteUseCase: IGetTravellRouteUseCase;
  constructor({
    getTravellRouteUseCase,
  }: {
    getTravellRouteUseCase: IGetTravellRouteUseCase;
  }) {
    this.getTravellRouteUseCase = getTravellRouteUseCase;
  }

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { id: scheduleId } = req.params;
    const travellRouterDetails = await this.getTravellRouteUseCase.execute({
      _id: scheduleId,
    });
    if (travellRouterDetails == null)
      throw new BadRequestError({ code: 400, message: "id is invalid" });

    res.json(travellRouterDetails);
  }
}
