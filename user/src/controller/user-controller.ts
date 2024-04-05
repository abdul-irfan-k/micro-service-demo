import UserModel from "../model/user-model";
import { createJwtTokenHandler } from "../util/jwt";
import { assignCookiesHandler } from "../util/jwt/cookies";
import { Request, Response } from "express";

export const signUpUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, userId, password, confirmPassword } = req.body;
    const passwordMatched = password == confirmPassword;
    if (!passwordMatched)
      return res
        .status(400)
        .json({
          isValid: false,
          errorType: "INVALIDCOMFIRMPASSWORD",
          errorMessage: "invalid comfirm password",
        });

    const existingUser = await UserModel.findOne({ userId });
    if (existingUser != null)
      return res
        .status(400)
        .json({
          isValid: false,
          errorType: "USERALREADEXIST",
          errorMessage: "user already exist",
        });

    const user = new UserModel({ name, email, userId, password });
    await user.save();

    const { token: authToken } = await createJwtTokenHandler({
      _id: user._id.toString(),
      email: user.email,
      expiresIn: "1 days",
      tokenType: "authToken",
    });
    const { token: refreshToken } = await createJwtTokenHandler({
      _id: user._id.toString(),
      email: user.email,
      expiresIn: "1 days",
      tokenType: "refreshToken",
    });

    assignCookiesHandler({
      res,
      token: authToken,
      expires: "1d",
      tokenName: "authToken",
    });

    assignCookiesHandler({
      res,
      token: refreshToken,
      expires: "1d",
      tokenName: "refreshToken",
    });

    return res
      .status(200)
      .json({ isValid: true, name: user.name, email: user.email });
  } catch (error) {
    console.log(error);
  }
};

export const loginUserHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user == null)
      return res
        .status(404)
        .json({ isValid: false, errorType: "USERNOTFOUND" });

    const isCorrectPassword = await user.checkIsCorrectPassword(password);
    if (!isCorrectPassword)
      return res.status(400).json({ message: "INVALIDPASSWORD" });

    const { token: authToken } = await createJwtTokenHandler({
      _id: user._id.toString(),
      email: user.email,
      expiresIn: "1 days",
      tokenType: "authToken",
    });
    const { token: refreshToken } = await createJwtTokenHandler({
      _id: user._id.toString(),
      email: user.email,
      expiresIn: "1 days",
      tokenType: "refreshToken",
    });

    await assignCookiesHandler({
      res,
      token: authToken,
      tokenName: "authToken",
      expires: "1d",
    });
    await assignCookiesHandler({
      res,
      token: refreshToken,
      tokenName: "refreshToken",
      expires: "1d",
    });

    return res.status(200).json({ isValid: true, isLogedIn: true });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUserHandler = async (req: Request, res: Response) => {
  try {
    await res.clearCookie("authToken");
    await res.clearCookie("refreshToken");

    return res.status(200).json({ isLogedOut: true });
  } catch (error) {
    return res.status(400).json({});
  }
};

const updatedUserHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
