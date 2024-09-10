"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleThrowError = void 0;
const _envs_1 = __importDefault(require("../plugins/env/env-var.plugin.ts"));
const wordsManager_1 = require("../../helpers/wordsManager");
const _index_1 = __importDefault(require("./mockups/_index"));
const error_response_1 = __importDefault(require("./models/error-response"));
const { PRINT_INTERNAL_ERROR } = _envs_1.default;
const throwError = (serviceType, typeResponse, key) => {
    const errorResponse = (0, _index_1.default)(typeResponse, serviceType, key);
    if (!errorResponse)
        throw new error_response_1.default("internal_server_error", "Internal server error.", 500, customPayload("internal", "Internal server error."));
    else {
        PRINT_INTERNAL_ERROR && (0, wordsManager_1.printMsg)(errorResponse.internalMessage, "error");
        throw new error_response_1.default(typeResponse, errorResponse.message, errorResponse.status, customPayload(key, errorResponse.message));
    }
};
const simpleThrowError = (typeResponse, key) => {
    const errorResponse = (0, _index_1.default)(typeResponse, "ERROR", key);
    if (!errorResponse)
        throw new error_response_1.default("internal_server_error", "Internal server error.", 500, customPayload("internal", "Internal server error."));
    else {
        (0, wordsManager_1.printMsg)(errorResponse.internalMessage, "error");
        throw new error_response_1.default(typeResponse, errorResponse.message, errorResponse.status, customPayload(key, errorResponse.message));
    }
};
exports.simpleThrowError = simpleThrowError;
const customPayload = (key, message) => [
    {
        parameter: "internal",
        from: null,
        property: key || "unknown",
        constraints: {
            internal: message || "Unknown error."
        }
    }
];
exports.default = throwError;
