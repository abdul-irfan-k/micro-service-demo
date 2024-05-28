import { Request, Response } from "express";
import { IUpdateTravellRouteUseCase } from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";
import { validationResult } from "express-validator";
import { travellRouteUpdatedPublisher } from "../../../events/publisher";
import { natsWrapper } from "../../../nats-wrapper";

export default class PutTravellRouteController {
  private updateTravellRouteUseCase: IUpdateTravellRouteUseCase;
  constructor({ updateTravellRouteUseCase }: { updateTravellRouteUseCase: IUpdateTravellRouteUseCase }) {
    this.updateTravellRouteUseCase = updateTravellRouteUseCase;
  }

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { id: scheduleId } = req.params;
    const body = req.body;
    const travellRouteDetails = await this.updateTravellRouteUseCase.execute({
      _id: scheduleId,
      ...body,
    });
    if (travellRouteDetails != null) throw new BadRequestError({ code: 400 });

    await new  travellRouteUpdatedPublisher(natsWrapper.client).publish({
      _id: scheduleId,
      ...body,
    });
    return res.status(200).json(travellRouteDetails)
  }
}
