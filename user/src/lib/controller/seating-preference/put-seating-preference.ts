import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../util/bad-request-error";
import { IUpdateSeatingPreferenceUseCase } from "../../use-cases/interface/seating-preference-use-case";

export const makePutSeatingPreferenceController = ({
  updateSeatingPreferenceUseCase,
}:{updateSeatingPreferenceUseCase:IUpdateSeatingPreferenceUseCase}) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    if (!userId)
      throw new BadRequestError({
        code: 400,
        message: "Please provide userId",
      });

    const updatedSeatingPreferenceDetail = await updateSeatingPreferenceUseCase.execute(
      { userId, ...req.body }
    );

    return res.status(200).json(updateSeatingPreferenceUseCase);
  };
};
