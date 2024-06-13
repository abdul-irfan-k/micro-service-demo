import express from "express";
import { busController } from "@lib/controller";
import { makeExpressCallBack } from "@lib/middleware/express-callback";
import * as busValidator from "@lib/validator/bus-validator";

const router = express.Router();
router.get(
  "buses/search-buses",
  busValidator.getSearchBusValidator,
  makeExpressCallBack(busController.getSearchBuses)
);
router.get(
  "/buses/:id",
  busValidator.getBusValidator,
  makeExpressCallBack(busController.getBus)
);
router.get(
  "/buses/:id/ticket-chart",
  busValidator.getBusChartValidator,
  makeExpressCallBack(busController.getBusChart)
);
export default router;
