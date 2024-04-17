import express from "express";
// import {
//   loginUserHandler,
//   signUpUserHandler,
// } from "../controller/user-controller";

import { userController } from "../lib/controller/user-controller";
import { userRepository } from "../lib/repository";
import * as userUserCase from "../lib/useCases";

export const userRoutes = () => {
  const router = express.Router();

  const controller = userController({
    repository: { userRepository },
    useCase: userUserCase,
  });

  router.get("/:id",controller.getUser);
  router.post("/",controller.createUser);
  router.put("/:id",controller.updateUser);


  router.get("/seating-preference")
  router.post("/seating-preference")
  router.put("/seating-preference")
  return router
};
