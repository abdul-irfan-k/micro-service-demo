import { NextFunction, Request, Response } from "express";
import { CustomError } from "../util/custom-error";

export const ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    const { errors, statusCode, stack, message, validationError } = err;
    if (err.logging) {
      console.error(
        JSON.stringify(
          {
            code: statusCode,
            errors: errors,
            stack: stack,
          },
          null,
          2
        )
      );
    }
    if(validationError)return res.status(400).json({validationError})
    return res.status(statusCode).send({ message });
  }
  return res.status(500).send({ erros: [{ message: "Something went wrong" }] });
};
