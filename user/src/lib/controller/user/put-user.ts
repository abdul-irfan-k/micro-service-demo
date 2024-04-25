import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../util/bad-request-error";
import { IUpdateUserUseCase } from "../../use-cases/interface";

export const makePutUserController = ({ updateUserUseCase }:{updateUserUseCase:IUpdateUserUseCase}) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    if (!userId)
      throw new BadRequestError({
        code: 400,
        message: "Please provide userId",
      });

    const updatedUser = await updateUserUseCase.execute({userId, ...req.body});
    if (!updateUserUseCase) throw new BadRequestError({ code: 400 });
    return res.status(200).json(updatedUser);
  };
};
