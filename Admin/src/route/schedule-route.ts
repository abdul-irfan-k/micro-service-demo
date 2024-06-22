import express from "express";
import * as scheduleValidator from "../lib/validators/schedule";
import { scheduleController } from "../lib/controller";
import { makeExpressCallBack } from "@lib/middleware/express-callback";

const router = express.Router();

// router.get("/buses");
//   router.get("/schedules/:id", scheduleValidator.getBusValidator);

router.post(
  "/schedules",
  scheduleValidator.createScheduleValidator,
  makeExpressCallBack(scheduleController.postSchedule)
);
router.put(
  "/schedules/:id",
  scheduleValidator.updateScheduleValidator,
  makeExpressCallBack(scheduleController.putSchedule)
);

router.post("/schedules/:id/schedule");
export default router;
