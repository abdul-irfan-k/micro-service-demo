import { IGetBusUseCase } from "@lib/use-cases/interface/bus-use-case";
import { BadRequestError } from "@lib/util/bad-request-error";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export class GetBusController {
  constructor(private getBusUseCase: IGetBusUseCase) {}
  async processRquest(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }
  }
}