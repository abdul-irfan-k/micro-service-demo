import express from "express";
import authController from "../lib/controller";
import { postSignUp } from "../lib/controller";

export const authRoutes = () => {
  const router = express.Router();

  router.get("/sign-in", authController.postSignIn);
  //@ts-ignore
  router.post("/sign-up", authController.postSignUp);
  // router.put("/:id",controller.updateUser);
  return router;
};
