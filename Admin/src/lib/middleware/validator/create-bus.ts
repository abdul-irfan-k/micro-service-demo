import { body, check } from "express-validator";

export const createBusValidator = [
  body("name", "busName doesnot exist").exists(),
  body("number").exists()
];
