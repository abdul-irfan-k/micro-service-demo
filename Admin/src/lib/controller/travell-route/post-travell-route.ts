import { Request, Response } from "express";
import { ICreateTravellRouteUseCase} from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";
import { travellRouteAddedPublisher } from "../../../events/publisher";
import { natsWrapper } from "../../../nats-wrapper";
import { validationResult } from "express-validator";

export default class PostTravellRouteController {
  private createTravellRouteUseCase: ICreateTravellRouteUseCase;
  constructor({ createTravellRouteUseCase }: { createTravellRouteUseCase: ICreateTravellRouteUseCase }) {
    this.createTravellRouteUseCase = createTravellRouteUseCase;
  }

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const args = req.body;
    const travellRouteDetails = await this.createTravellRouteUseCase.execute({ ...args });
    if (travellRouteDetails == null) throw new BadRequestError({ code: 400 });

    new travellRouteAddedPublisher(natsWrapper.client).publish({ ...travellRouteDetails });

    res.status(200).json(travellRouteDetails);
  }
}
