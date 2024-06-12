import express from "express";
import * as busVaildator from "../lib/validators/bus";
import { busController } from "../lib/controller";
import { makeExpressCallBack } from "../lib/middleware/express-callback";

const router = express.Router();

router.get(
  "/buses/:id",
  busVaildator.getBusValidator,
  makeExpressCallBack(busController.getBus)
);

router.post(
  "/buses",
  busVaildator.createBusValidator,
  makeExpressCallBack(busController.getBus)
);
router.put("/buses/:id", busVaildator.updateBusValidator);

export default router;
