import { NextFunction, Request, Response } from "express";
import { createJwtTokenHandler } from "../util/jsonwebtoken";
import { BadRequestError } from "../util/bad-request-error";
import { validationResult } from "express-validator";
//@ts-ignore
export const makeSignUpController = ({ signUpUseCase, getUserUseCase }) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { name, email, password, profileImageUrl } = req.body;

    const oldUser = await getUserUseCase({ email });
    if (oldUser != null)
      throw new BadRequestError({
        message: "email already have an account",
        code: 403,
      });

    const addUser = await signUpUseCase({
      name,
      email,
      password,
      profileImageUrl,
    });

    const { token: authToken } = await createJwtTokenHandler({
      _id: addUser._id,
      email: addUser.email,
      expiresIn: "7 days",
      tokenType: "authToken",
    });

    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
    res.cookie("authToken", authToken, {
      httpOnly: true,
      expires,
    });
    return res.json({ isLogedIn: true });
  };
};
