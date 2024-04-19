import { NextFunction, Request, Response } from "express";
//@ts-ignore
export const makeSignInController = ({ signInUseCase, getUserUseCase }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({});
    const { email, password } = req.body;

    if (!email || !password) return;

    const oldUser = getUserUseCase({ email });
    if (oldUser == null) return;

    const isValidCredintials = signInUseCase({ email, password });
    if (!isValidCredintials) return;

    return res.json({ isLogedIn: true });
  };
};
