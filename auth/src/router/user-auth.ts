import express, { NextFunction, Request, Response } from "express";
import authController from "../lib/controller";
import * as authValidator from "../lib/validator/auth";
import { isUserAuthenticated } from "@lib/middleware/user-login-validator";

const router = express.Router();

//@ts-ignore
const makeExpressCallBack =
  (callback: any) => (req: Request, res: Response, next: NextFunction) =>
    callback.processRequest(req, res, next);

router.post(
  "/sign-in",
  authValidator.signInValidator,
  makeExpressCallBack(authController.postSignIn)
);
router.post(
  "/sign-up",
  authValidator.signUpValidator,
  makeExpressCallBack(authController.postSignUp)
);

router.post(
  "/forgot-password-request",
 makeExpressCallBack( authController.postForgotPassword)
);
router.put(
  "update-password-with-old-password",
  isUserAuthenticated,
  makeExpressCallBack(authController.putPasswordWithOldPwd)
);
router.put(
  "update-password-with-token",
  makeExpressCallBack(authController.putPasswordWithToken)
);
export default router;
