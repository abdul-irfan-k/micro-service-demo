import { NextFunction, Request, Response } from "express";

export const makePostUserController = ({ createUserUseCase }) => {
    return async(req:Request,res:Response,next:NextFunction) => {
      const user = await createUserUseCase(req.body)
      if(user == null)return 
      else return res.status(200).json(user)
    };
  };
  