import express from "express";
import * as busVaildator from "../lib/validators/bus";
import * as busControler from "../lib/controller";

export const busRoute = () => {
  const router = express.Router();

  // router.get("/buses");
  router.get("/buses/:id", busVaildator.getBusValidator);

  router.post(
    "/buses",
    busVaildator.createBusValidator,
    busControler.getBus.processRequest
  );
  router.put("/buses/:id", busVaildator.updateBusValidator);

  router.post("/buses/:id/schedule");
  return router;
};
