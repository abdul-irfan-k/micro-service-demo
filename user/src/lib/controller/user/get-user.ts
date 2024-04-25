import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../util/bad-request-error";
import { IGetUserUseCase } from "../../use-cases/interface";

export const makeGetUserController = ({
  getUserUseCase,
}: {
  getUserUseCase: IGetUserUseCase;
}) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id:userId } = req.params;
    if (userId == undefined)
      throw new BadRequestError({
        code: 400,
        message: "Please provide userId",
      });
    const user = await getUserUseCase.execute({userId:userId.toString()});
    if (!user)
      throw new BadRequestError({ code: 400, message: "User not found" });
    return res.status(200).json(user);
  };
};
