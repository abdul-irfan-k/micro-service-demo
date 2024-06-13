import { body, param, query } from "express-validator";

export const getSearchBusValidator = [
  query("departurePlace").notEmpty().withMessage("departure place is required"),
  query("destinationPlace")
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
