import { Response } from "express";
import { ErrorResponse } from "./errors.response";

function sendError(res: Response, error: ErrorResponse) {
    res.status(error.status || 400).json({
        type: error.type || "unknown",
        message: error.message || "An error occurred.",
        payload: error.payload || [
            {
                parameter: "unknown",
                from: null,
                property: "unknown",
                constraints: {
                    unknown: error.message || "An error occurred."
                }
            }
        ],
    });
}
export default sendError;