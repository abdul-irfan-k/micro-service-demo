import express from "express";
import * as travellRouteVaildator from "../lib/validators/travell-routet";
import {travellRouteController} from "../lib/controller";

export const travellRouteRouter = () => {
  const router = express.Router();

  // router.get("/buses");
  router.get("/travell-routes/:id", travellRouteVaildator.getTravellRouteValidator);

  router.post(
    "/travell-routes",
    travellRouteVaildator.createTravellRouteValidator,
    travellRouteController.getTravellRoute.processRequest
  );
  router.put("/travell-routes/:id", travellRouteVaildator.updateTravellRouteValidator);

  router.post("/travell-routes/:id/schedule");
  return router;
};
