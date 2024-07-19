"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResponse extends Error {
    constructor(type, message, status, payload) {
        super();
        this.name = "ErrorResponse";
        this.type = type;
        this.status = status;
        this.message = message;
        this.payload = payload;
        Error.captureStackTrace(this, this.stack);
    }
}
exports.default = ErrorResponse;
