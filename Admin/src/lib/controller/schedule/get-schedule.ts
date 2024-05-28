import { Request, Response } from "express";
import { IGetScheduleUseCase } from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";
import { validationResult } from "express-validator";

export default class GetScheduleController {
  getScheduleUseCase: IGetScheduleUseCase;
  constructor({ getScheduleUseCase }: { getScheduleUseCase: IGetScheduleUseCase }) {
    this.getScheduleUseCase = getScheduleUseCase;
  }

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { id: scheduleId } = req.params;
    const scheduleDetails = await this.getScheduleUseCase.execute({ _id: scheduleId });
    if (scheduleDetails == null)
      throw new BadRequestError({ code: 400, message: "id is invalid" });
  
    res.json(scheduleDetails)
  }
}
