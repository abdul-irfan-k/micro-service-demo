import express from "express";
import authController from "../lib/controller";

export const authRoutes = () => {
  const router = express.Router();

  router.post("/sign-in", authController.postSignIn);
  //@ts-ignore
  router.post("/sign-up", authController.postSignUp);
  // router.put("/:id",controller.updateUser);
  return router;
};
