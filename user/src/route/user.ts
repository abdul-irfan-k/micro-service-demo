import express from 'express'
import * as controller from "../lib/controller";

export const userRoutes = () => {
  const router = express.Router();

  router.get("/:id", controller.getUser);
  router.post("/", controller.postUser);
  router.put("/:id", controller.putUser);

  router.get("/seating-preference");
  router.post("/seating-preference");
  router.put("/seating-preference");
  return router;
};
