import express from "express";
import { makeExpressCallBack } from "@lib/middleware/express-callback";
import * as busController from "@lib/controller";
import * as busValidator from "@lib/validator/bus-validator";

const router = express.Router();
router.get(
  "/bookings/search-buses",
  busValidator.getSearchBusValidator,
  makeExpressCallBack(busController.getSearchBuses)
);
router.post(
  "/bookings",
  busValidator.getBusValidator,
  makeExpressCallBack(busController.getBus)
);
// router.get(
//   "/buses/:id/ticket-chart",
//   busValidator.getBusChartValidator,
//   makeExpressCallBack(busController.getBusChart)
// );
export default router;
