import { Request, Response } from "express";
import { IUpdateScheduleUseCase } from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";
import { validationResult } from "express-validator";
import { busUpdatedPublisher } from "../../../events/publisher";
import { natsWrapper } from "../../../nats-wrapper";

export default class PutScheduleController {
  updateScheduleUseCase: IUpdateScheduleUseCase;
  constructor({ updateScheduleUseCase }: { updateScheduleUseCase: IUpdateScheduleUseCase }) {
    this.updateScheduleUseCase = updateScheduleUseCase;
  }

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { id: scheduleId } = req.params;
    const body = req.body;
    const updateScheduleDetails = await this.updateScheduleUseCase.execute({
      _id: scheduleId,
      ...body,
    });
    if (updateScheduleDetails != null) throw new BadRequestError({ code: 400 });

    await new  busUpdatedPublisher(natsWrapper.client).publish({
      _id: scheduleId,
      ...body,
    });
    return res.status(200).json(updateScheduleDetails)
  }
}
