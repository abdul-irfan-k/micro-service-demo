import express, { NextFunction, Request, Response } from "express";
import * as controller from "../lib/controller";
import { isUserAuthenticated } from "@/lib/middleware/user-login-validator";
import {
  createUserValidator,
  getUserValidator,
  updateUserValidator,
} from "@/lib/validator/user-validator";

const router = express.Router();

router.get(
  "/:id",
  isUserAuthenticated,
  getUserValidator,
  (req:Request, res:Response,next:NextFunction) => controller.getUser.processRequest(req, res,next)
);
router.post(
  "/",
  isUserAuthenticated,
  createUserValidator,
  controller.postUser.processRequest
);

router.put("/:id", updateUserValidator, controller.putUser.processRequest);

router.get(
  "/seating-preference/:id",
  isUserAuthenticated,
  controller.getSeatingPreference
);
router.post(
  "/seating-preference",
  isUserAuthenticated,
  controller.postSeatingPreference
);
router.put(
  "/seating-preference",
  isUserAuthenticated,
  controller.putSeatingPreference
);

export default router;
