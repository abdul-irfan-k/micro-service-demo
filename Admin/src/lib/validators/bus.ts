import { body, check, param } from "express-validator";

export const createBusValidator = [
  body("name").notEmpty().withMessage("name is required"),
  body("number").notEmpty().withMessage("number is required"),
  body("totalSeats").isInt().withMessage("total seats required"),
  body("seatingConfiguration")
    .notEmpty()
    .withMessage("seating configuration required"),
];

export const updateBusValidator = [
  param("id").notEmpty().withMessage("id is required"),
];

export const getBusValidator = [
  param("id").notEmpty().withMessage("id is required"),
];
