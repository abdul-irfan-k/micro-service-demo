import express from "express";
import{ createBusValidator } from "../lib/middleware/validator/create-bus";
import * as busControler  from '../lib/controller'


export const busRoute = () => {
  const router = express.Router();

  router.get("/buses");
  router.get("/bus/:id");

  router.post("/buses",createBusValidator,busControler.getBus.processRequest);
  router.put("/buses/:id");

  router.post("/buses/:id/schedule");
  return router;
};
