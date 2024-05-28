import { Request, Response } from "express";
import { ICreateScheduleUseCase} from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";
import { scheduleAddedPublisher } from "../../../events/publisher";
import { natsWrapper } from "../../../nats-wrapper";
import { validationResult } from "express-validator";

export default class PostScheduleController {
 private  createScheduleUseCase: ICreateScheduleUseCase;
  constructor({ createScheduleUseCase }: { createScheduleUseCase: ICreateScheduleUseCase }) {
    this.createScheduleUseCase = createScheduleUseCase;
  }

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const args = req.body;
console.log('args',args)
    const scheduleDetails = await this.createScheduleUseCase.execute({ ...args });
    if (scheduleDetails == null) throw new BadRequestError({ code: 400 });

    new scheduleAddedPublisher(natsWrapper.client).publish({ ...scheduleDetails });

    res.status(200).json(scheduleDetails);
  }
}
