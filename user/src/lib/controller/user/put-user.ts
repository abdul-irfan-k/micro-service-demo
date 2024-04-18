import { NextFunction, Request, Response } from "express";

export const makeGetUserController = ({ updateUserUseCase }) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;

    const updatedUser = await updateUserUseCase(userId, req.body);
    if (!updateUserUseCase) return;
    return res.status(200).json(updatedUser);
  };
};
