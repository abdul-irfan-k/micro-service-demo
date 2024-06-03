import express from "express";
import authController from "../lib/controller";
import * as authValidator from "../lib/validator/auth";

export const busOwnerauthRoutes = () => {
  const router = express.Router();

  router.get("/sign-in", authValidator.signInValidator);
  router.post("/sign-up", authValidator.signUpValidator);

  return router;
};
