import { NextFunction, Request, Response } from "express";

export const makeGetUserController = ({ getUserUseCase }) => {
  return async(req: Request, res: Response, next: NextFunction) => {
    const {userId} = req.query
    const user = await getUserUseCase(userId);
    if(!user)return 
    return res.status(200).json(user)
  };
};
