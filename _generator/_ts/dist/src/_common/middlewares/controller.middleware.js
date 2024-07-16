"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const throw_error_wrapper_1 = __importDefault(require("../config/server/request-api/throw-error-wrapper"));
const defaultOptions = { error_wrapper: true };
const controllerMiddlewares = (controllers, middlewareOptions = defaultOptions) => {
    for (const key in controllers) {
        if (middlewareOptions.error_wrapper)
            controllers[key] = (0, throw_error_wrapper_1.default)((controllers[key]));
    }
    return controllers;
};
exports.default = controllerMiddlewares;
