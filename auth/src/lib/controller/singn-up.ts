import { NextFunction, Request, Response } from "express";
export const makeSignUpController = ({ signUpUseCase, getUserUseCase }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) return;

    const oldUser = getUserUseCase({ email });
    if (oldUser != null) return;

    const isValidCredintials = signUpUseCase({ email, password });
    if (!isValidCredintials) return;

    return res.json({ isLogedIn: true });
  };
};
