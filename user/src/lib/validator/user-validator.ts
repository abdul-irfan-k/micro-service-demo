import { body, check, param } from "express-validator";

export const createUserValidator = [
  body("name").notEmpty().withMessage("name is required"),
  body("email").notEmpty().withMessage("number is required")
];

export const updateUserValidator = [
  param("id").notEmpty().withMessage("id is required"),
];

export const getUserValidator = [
  param("id").notEmpty().withMessage("id is required"),
];
