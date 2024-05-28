import { Request, Response } from "express";
import { ICreateBusUseCase } from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";
import { busCreatedPublisher } from "../../../events/publisher";
import { natsWrapper } from "../../../nats-wrapper";
import { validationResult } from "express-validator";

export default class PostBusController {
  createBusUseCase: ICreateBusUseCase;
  constructor({ createBusUseCase }: { createBusUseCase: ICreateBusUseCase }) {
    this.createBusUseCase = createBusUseCase;
  }

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const args = req.body;

    const busDetails = await this.createBusUseCase.execute({ ...args });
    if (busDetails == null) throw new BadRequestError({ code: 400 });

    new busCreatedPublisher(natsWrapper.client).publish({ ...busDetails });

    res.status(200).json(busDetails);
  }
}
