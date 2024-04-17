import express from "express";
import travellController from "../lib/controller";
export const travellRoute = () => {
  const router = express.Router();

  const controller = travellController();
  router.get("travell-history", controller.getTravellHistory);
  router.delete("travell-history/:id", controller.deleteTravellHistory);

  return router;
};
