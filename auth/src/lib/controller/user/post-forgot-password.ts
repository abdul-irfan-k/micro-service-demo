import { BadRequestError } from "@lib/util/bad-request-error";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

export class PostForgotPassword {
  constructor() {}

  async processRequest(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }
  }
}
