import { Request, Response } from "express";
import { IGetBusUseCase } from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";
import { validationResult } from "express-validator";

export default class GetBusController {
  getBusUseCase: IGetBusUseCase;
  constructor({ getBusUseCase }: { getBusUseCase: IGetBusUseCase }) {
    this.getBusUseCase = getBusUseCase;
  }

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { id: busId } = req.params;
    const busDetails = await this.getBusUseCase.execute({ _id: busId });
    if (busDetails == null)
      throw new BadRequestError({ code: 400, message: "id is invalid" });
  
    res.json(busDetails)
  }
}
