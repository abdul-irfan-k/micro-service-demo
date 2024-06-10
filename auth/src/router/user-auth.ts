import express from "express";
import * as authController from "../lib/controller";
import * as authValidator from "../lib/validator/auth";
import { isUserAuthenticated } from "@lib/middleware/user-login-validator";

export const authRoutes = () => {
  const router = express.Router();

  router.post(
    "/sign-in",
    authValidator.signInValidator,
    authController.postSignIn
  );
  //@ts-ignore
  router.post(
    "/sign-up",
    authValidator.signUpValidator,
    authController.postSignUp
  );

  router.post(
    "/forgot-password-request",
    authController.postForgotPassword.processRequest
  );
  router.put(
    "update-password-with-old-password",
    isUserAuthenticated,
    authController.putPasswordWithOldPwd.processRequest
  );
  router.put(
    "update-password-with-token",
    authController.putPasswordWithToken.processRequest
  );
  return router;
};
