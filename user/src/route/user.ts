import express from "express";
import * as controller from "../lib/controller";

export const userRoutes = () => {
  const router = express.Router();

  router.get("/:id", controller.getUser);
  router.post("/", controller.postUser);
  router.put("/", controller.putUser);

  router.get("/seating-preference/:id", controller.getSeatingPreference);
  router.post("/seating-preference", controller.postSeatingPreference);
  router.put("/seating-preference", controller.putSeatingPreference);
  return router;
};
