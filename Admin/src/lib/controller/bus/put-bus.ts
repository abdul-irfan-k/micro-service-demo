import { Request, Response } from "express";
import { IUpdateBusUseCase } from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";
import { validationResult } from "express-validator";
import { busUpdatedPublisher } from "../../../events/publisher";
import { natsWrapper } from "../../../nats-wrapper";

export default class PutBusController {
  updateBusUseCase: IUpdateBusUseCase;
  constructor({ updateBusUseCase }: { updateBusUseCase: IUpdateBusUseCase }) {
    this.updateBusUseCase = updateBusUseCase;
  }

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { id: busId } = req.params;
    const body = req.body;
    const updatedBusDetails = await this.updateBusUseCase.execute({
      _id: busId,
      ...body,
    });
    if (updatedBusDetails != null) throw new BadRequestError({ code: 400 });

    await new  busUpdatedPublisher(natsWrapper.client).publish({
      _id: busId,
      ...body,
    });
    return res.status(200).json(updatedBusDetails)
  }
}
