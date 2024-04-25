import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../util/bad-request-error";
import { ICreateSeatingPreferenceUseCase } from "../../use-cases/interface/seating-preference-use-case";
import { IGetUserUseCase } from "../../use-cases/interface";

export const makePostSeatingPreferenceController = ({
  createSeatingPreferenceUseCase,
  getUserUseCase,
}: {
  createSeatingPreferenceUseCase: ICreateSeatingPreferenceUseCase;
  getUserUseCase: IGetUserUseCase;
}) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;

    if (!userId)
      throw new BadRequestError({
        code: 400,
        message: "Please provide userId",
      });

    const userDetails = await getUserUseCase.execute({ userId });
    if (userDetails == null)
      throw new BadRequestError({ code: 400, message: "Invalid userId" });

    const seatingPreferenceDetail =
      await createSeatingPreferenceUseCase.execute(req.body);
    return res.status(200).json(seatingPreferenceDetail);
  };
};
