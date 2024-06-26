import express from "express";
import * as travellRouteVaildator from "../lib/validators/travell-routet";
import { travellRouteController } from "../lib/controller";
import { makeExpressCallBack } from "@lib/middleware/express-callback";

const router = express.Router();

// router.get("/buses");
router.get(
  "/travell-routes/:id",
  travellRouteVaildator.getTravellRouteValidator
);

router.post(
  "/travell-routes",
  travellRouteVaildator.createTravellRouteValidator,
  makeExpressCallBack(travellRouteController.postTravellRoute)
);
router.put(
  "/travell-routes/:id",
  travellRouteVaildator.updateTravellRouteValidator
);

router.post("/travell-routes/:id/schedule");
export default router;
