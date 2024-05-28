import { body, param } from "express-validator";

export const createTravellRouteValidator = [
  body("routeName").isEmpty().withMessage("route name is required"),
  body("**.lat").trim().isNumeric().withMessage("latitude must be integet"),
  body("**.lng").trim().isNumeric().withMessage("latitude must be integet"),
  body("**.placeName").isEmpty().withMessage("place name must be required"),
  body("startingPlace")
    .isEmpty()
    .withMessage("starting place details is required"),
  body("destinationPlace")
    .isEmpty()
    .withMessage("starting place details is required"),
  body("stops").isArray({ min: 0 }).withMessage("stops details is required"),
];
