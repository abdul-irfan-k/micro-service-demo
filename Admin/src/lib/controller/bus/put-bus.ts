import { Request, Response } from "express";
import { IUpdateBusUseCase } from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";

export default class PutBusController {
  updateBusUseCases: IUpdateBusUseCase;
  constructor({ updateBusUseCases }: { updateBusUseCases: IUpdateBusUseCase }) {
    this.updateBusUseCases = updateBusUseCases;
  }

  processRequest(req: Request, res: Response) {
    
  }
}
