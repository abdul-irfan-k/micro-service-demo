import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../util/bad-request-error";
import jwt from "jsonwebtoken";

export const isUserAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accessToken, refreshToken } = req.cookies || {};
    if (!accessToken || !refreshToken)
      throw new BadRequestError({ code: 400, message: "token is required" });
    const isCutomAuth = accessToken?.length < 500;

    if (accessToken && isCutomAuth) {
      //@ts-ignore
      jwt.verify(accessToken, accessTokenSecret || "", (error, decoded) => {
        if (!error) {
          //@ts-ignore
          req.user = { _id: decoded._id, email: decoded.email };
          return next();
        }
        throw new BadRequestError({
          code: 403,
          message: "User access token expired",
        });
      });
    } else throw new BadRequestError({ code: 400 });
  } catch (error) {
    throw new BadRequestError({ code: 400, message: "token expired" });
  }
};
