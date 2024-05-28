import { body ,param} from "express-validator";

export const createScheduleValidator = [
  body("busId").notEmpty().withMessage("bus id is required"),
  body(["departureTime.hour", "arrivaleTime.hour"])
    .custom((hour) => {
      return hour < 25 && hour > -1;
    })
    .withMessage("hour muse be within 0 - 24"),
  body("routeId").notEmpty().withMessage("route id is required"),
];

export const updateScheduleValidator = [
  param("id").notEmpty().withMessage("id is required"),
];

export const getScheduleValidator = [
  param("id").notEmpty().withMessage("id is required"),
];
