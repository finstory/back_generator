import { ErrorFormat } from "../interfaces/error-format.interface";


class ErrorResponse extends Error {
  type: string;
  message: string;
  status: number;
  payload: ErrorFormat[];
  stack: any;
  constructor(type: string, message: string, status: number, payload: ErrorFormat[]) {
    super();
    this.name = "ErrorResponse";
    this.type = type;
    this.status = status;
    this.message = message;
    this.payload = payload;
    Error.captureStackTrace(this, this.stack);
  }

}

export default ErrorResponse;