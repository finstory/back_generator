"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendError(res, error) {
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
exports.default = sendError;
