import { CustomError, CustomErrorContent } from "./custom-error";

export class BadRequestError extends CustomError {
  private static readonly _statusCode: number = 400;
  // private readonly _errors: CustomErrorContent[];
  private readonly _logging: boolean;
  private readonly _code: number;

  constructor(params: {
    message?: string;
    code?: number;
    // errors?: CustomErrorContent[];
    logging?: boolean;
  }) {
    const { logging, message, code } = params;
    super(message || "Bad Request");
    this._code = code || BadRequestError._statusCode;
    // this._errors = errors;
    this._logging = logging || false;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  get errors() {
    return [{ message: this.message }];
  }

  get statusCode() {
    return this._code;
  }
  get logging() {
    return this._logging;
  }
}
