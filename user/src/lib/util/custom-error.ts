import { ValidationError } from "express-validator";

export interface CustomErrorContent {
  message: string;
  context?: Record<string, any>;
}

export abstract class CustomError extends Error {
  abstract readonly statusCode: number;
  abstract readonly errors: CustomErrorContent[];
  abstract readonly logging: boolean;
  abstract readonly validationError?: ValidationError[];

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
