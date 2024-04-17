import express from "express";
import authController from "../lib/controller";

export const busOwnerauthRoutes = () => {
  const router = express.Router();

  router.get("/sign-in", authController.postSignIn);
  router.post("/sign-up", authController.postSignUp);
  // router.put("/:id",controller.updateUser);

  return router;
};
