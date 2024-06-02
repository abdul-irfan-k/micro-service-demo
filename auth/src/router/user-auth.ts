import express from "express";
import authController from "../lib/controller";
import * as authValidator from "../lib/validator/auth";

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
  // router.put("/:id",controller.updateUser);
  return router;
};
