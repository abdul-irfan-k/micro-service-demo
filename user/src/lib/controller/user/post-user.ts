import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../util/bad-request-error";
import { ICreateUserUseCase } from "../../use-cases/interface";

export const makePostUserController = ({ createUserUseCase }:{createUserUseCase:ICreateUserUseCase}) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = await createUserUseCase.execute(req.body);
    if (user == null) throw new BadRequestError({ code: 400 });
    else return res.status(200).json(user);
  };
};
