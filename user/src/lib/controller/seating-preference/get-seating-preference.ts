import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../util/bad-request-error";
import { IGetSeatingPreferenceUseCase } from "../../use-cases/interface/seating-preference-use-case";

export const makeGetSeatingPreferenceController = ({
  getSeatingPreferenceUseCase,
}: {
  getSeatingPreferenceUseCase: IGetSeatingPreferenceUseCase;
}) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id: userId } = req.params;
    if (!userId)
      throw new BadRequestError({
        code: 400,
        message: "Please provide userId",
      });

    const seatingPrefrenceSeatngDeatail =
      await getSeatingPreferenceUseCase.execute({
        userId,
      });
    return res.status(200).json({ seatingPrefrenceSeatngDeatail });
  };
};
