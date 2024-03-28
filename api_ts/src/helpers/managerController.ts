import { Response, Request } from "express";
import { CustomError } from "./customError";

function send<T>(res: Response<T>, statusCode: number, data: T) {
  try {
    res.status(statusCode).json(data);
  } catch (error) {
    console.log(`Failed to send response: ${error.message}`);
  }
}

function sendError(res: Response, error: CustomError) {
  res.status(400).json({
    type: error.type || "unknown",
    payload: error.payload || error.message,
  });
}

export { send, sendError };
