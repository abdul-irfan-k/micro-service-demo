import express from "express";
import * as scheduleValidator from "../lib/validators/schedule";
import {scheduleController} from "../lib/controller";
import { ScheduleModel } from "../app/database/schema";

export const scheduleRoute = () => {
  const router = express.Router();

  // router.get("/buses");
//   router.get("/schedules/:id", scheduleValidator.getBusValidator);

  router.post(
    "/schedules",
    scheduleValidator.createScheduleValidator,
    scheduleController.postSchedule.processRequest
  );
//   router.put("/schedules/:id", scheduleValidator.update);

  router.post("/schedules/:id/schedule");
  return router;
};
