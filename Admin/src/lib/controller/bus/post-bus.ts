import { Request, Response } from "express";
import { ICreateBusUseCase } from "../../use-case/interface";
import { BadRequestError } from "../../util/bad-request-error";

export default class PostBusController {
  createBusUseCase: ICreateBusUseCase;
  constructor({ createBusUseCase }: { createBusUseCase: ICreateBusUseCase }) {
    this.createBusUseCase = createBusUseCase;
  }

  processRequest(req: Request, res: Response) {
    const {
      layoutImageSrc,
      name,
      number,
      seatingConfiguration,
      seatingLayoutId,
      totalSeats,
      _id,
      leftSeatingArrangement,
      rightSeatingArrangement,
      routeId,
      scheduleId,
      travellorId,
    } = req.body;

    if (name == "")
      throw new BadRequestError({
        code: 400,
        message: "Please provide busname",
      });

    const busDetails = await this.createBusUseCase.execute({
      layoutImageSrc,
      name,
      number,
      seatingConfiguration,
      seatingLayoutId,
      totalSeats,
      _id,
      leftSeatingArrangement,
      rightSeatingArrangement,
      routeId,
      scheduleId,
      travellorId,
    });
  }
}
