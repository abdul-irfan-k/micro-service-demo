import { body, param, query } from "express-validator";

export const getSearchBusValidator = [
  body("startPlace").notEmpty().withMessage("departure place is required"),
  body("destinationPlace")
    .notEmpty()
    .withMessage("destination place is required"),
];

export const getBusValidator = [
  param("id").notEmpty().withMessage("bus id is required"),
];

export const getBusChartValidator = [
  param("id").notEmpty().withMessage("bus id is required"),
  query("date").isDate().withMessage("date must be valid"),
];
