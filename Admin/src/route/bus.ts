import express from "express";
import * as busVaildator from "../lib/validators/bus";
import {busController} from "../lib/controller";

export const busRoute = () => {
  const router = express.Router();

  // router.get("/buses");
  router.get("/buses/:id", busVaildator.getBusValidator);

  router.post(
    "/buses",
    busVaildator.createBusValidator,
    busController.getBus.processRequest
  );
  router.put("/buses/:id", busVaildator.updateBusValidator);

  router.post("/buses/:id/schedule");
  return router;
};
