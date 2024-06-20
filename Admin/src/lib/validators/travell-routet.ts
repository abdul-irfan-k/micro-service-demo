import { body, param } from "express-validator";

export const createTravellRouteValidator = [
  body("routeName").notEmpty().withMessage("route name is required"),
  body("**.name").notEmpty().withMessage("place name must be required"),
  body("originPlace")
    .notEmpty()
    .withMessage("origin place details is required"),
  body("destinationPlace")
    .notEmpty()
    .withMessage("destination  place details is required"),
  body("stops").isArray({ min: 0 }).withMessage("stops details is required"),
];


export const updateTravellRouteValidator = [
  param("id").notEmpty().withMessage("id is required"),
];

export const getTravellRouteValidator = [
  param("id").notEmpty().withMessage("id is required"),
];
