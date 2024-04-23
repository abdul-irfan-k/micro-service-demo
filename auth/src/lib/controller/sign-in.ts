import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../util/bad-request-error";
import { createJwtTokenHandler } from "../util/jsonwebtoken";
//@ts-ignore
export const makeSignInController = ({ signInUseCase, getUserUseCase }) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email)
      throw new BadRequestError({ code: 400, message: "Please provide Email" });
    if (!password)
      throw new BadRequestError({
        code: 400,
        message: "Please provide Password",
      });
    const userDetail = await getUserUseCase({ email });
    if (userDetail == null)
      throw new BadRequestError({ code: 400, message: "user not found" });
    const { isCorrectPassword } = await signInUseCase({ email, password });
    if (!isCorrectPassword)
      throw new BadRequestError({ code: 400, message: "invalid password" });

    const { token: authToken } = await createJwtTokenHandler({
      _id: userDetail._id,
      email: userDetail.email,
      expiresIn: "7 days",
      tokenType: "authToken",
    });

    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
    res.cookie("authToken", authToken, {
      httpOnly: true,
      expires,
    });

    return res.json({ name: userDetail.name, email: userDetail.email });
  };
};
