import { NextFunction, Request, Response } from "express";
import { generateAccessToken } from "../util/jsonwebtoken";
import { BadRequestError } from "../util/bad-request-error";
import jwt from "jsonwebtoken";
import { accessTokenSecret, refreshTokenSecret } from "../constant/constant";

export const checkisLogedInMiddleware = async (
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
        //@ts-ignore
        jwt.verify(refreshToken, refreshTokenSecret || "", (error, decoded) => {
          if (!error) {
            const data = {
              _id: decoded._id,
              email: decoded.email,
              name: decoded.name,
            };
            //@ts-ignore
            req.user = data;
            const newAccessToken = generateAccessToken(data);
            const option = {
              httpOnly: true,
              secure: true,
            };
            res.cookie("accessToken", newAccessToken, option);
            next();
          }
        });
      });
    } else throw new BadRequestError({ code: 400 });
  } catch (error) {
    throw new BadRequestError({ code: 400, message: "token expired" });
  }
};
