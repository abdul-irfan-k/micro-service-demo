import jwt, { VerifyErrors } from "jsonwebtoken";
import { Request } from "express";
import {
  accessTokenExpiry,
  accessTokenSecret,
  refreshTokenExpiry,
  refreshTokenSecret,
} from "../constant/constant";

interface createJwtTokenHandlerArgument {
  _id: string;
  email: string;
  name: string;
}

interface createJwtTokenHandlerReturnType {
  refreshToken: string;
  accessToken: string;
}

export const createAccessAndRefreshTokenHandler = async ({
  _id,
  email,
  name,
}: createJwtTokenHandlerArgument): Promise<createJwtTokenHandlerReturnType> => {
  const accessToken = await generateAccessToken({ _id, email, name });
  const refreshToken = await generateRefreshToken({ _id, email, name });

  return { accessToken, refreshToken };
};

export const generateAccessToken = (data: {
  _id: string;
  email: string;
  name: string;
}) => {
  const tokenSecret = accessTokenSecret || "";
  return jwt.sign(data, tokenSecret, {
    expiresIn: accessTokenExpiry,
  });
};
export const generateRefreshToken = (data: {
  _id: string;
  email: string;
  name: string;
}) => {
  const tokenSecret = refreshTokenSecret || "";
  return jwt.sign(data, tokenSecret, {
    expiresIn: refreshTokenExpiry,
  });
};

