import express from "express";
import * as scheduleValidator from "../lib/validators/schedule";
import * as scheduleControler from "../lib/controller";

export const scheduleRoute = () => {
  const router = express.Router();

  // router.get("/buses");
//   router.get("/schedules/:id", scheduleValidator.getBusValidator);

  router.post(
    "/schedules",
    scheduleValidator.createScheduleValidator,
    scheduleControler.postSchedule.processRequest
  );
//   router.put("/schedules/:id", scheduleValidator.update);

  router.post("/schedules/:id/schedule");
  return router;
};
