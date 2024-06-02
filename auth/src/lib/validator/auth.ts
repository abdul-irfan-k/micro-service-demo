import { body, param } from "express-validator";

export const signInValidator = [
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

export const signUpValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("password is required"),
  body("comfirmPassword")
    .notEmpty()
    .withMessage("comfirm password is required")
    .custom((comfirmPassword, { req }) => comfirmPassword == req.body.password),
];
