import express, { NextFunction, Request, Response } from "express";
import * as authController from "../lib/controller";
import * as authValidator from "../lib/validator/auth";
import { isUserAuthenticated } from "@lib/middleware/user-login-validator";
import { makeExpressCallBack } from "@lib/middleware/express-callback";

const router = express.Router();

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
  "/forgot-password",
  authValidator.forgotPasswordValidator,
  makeExpressCallBack(authController.postForgotPassword)
);
router.put(
  "/update-password-with-old-password",
  isUserAuthenticated,
  authValidator.updatePasswordWithOldPasswordValidator,
  makeExpressCallBack(authController.putPasswordWithOldPwd)
);
router.put(
  "/update-password-with-token",
  authValidator.updatePasswordWithTokenValidator,
  makeExpressCallBack(authController.putPasswordWithToken)
);
export default router;
