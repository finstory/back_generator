"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const env = __importStar(require("env-var"));
const envs = {
    //% PRINTS:
    PRINT_INTERNAL_ERROR: env.get("PRINT_INTERNAL_ERROR").required().asBool(),
    BACKEND_PATH: env.get("BACKEND_PATH").required().asString(),
    JSON_DB_PATH: env.get("BACKEND_PATH").required().asString() + '\\' + env.get("JSON_DB_PATH").required().asString(),
    APP_PATH: env.get("BACKEND_PATH").required().asString() + '\\' + env.get("MODULES_PATH").required().asString(),
    TEST_MODE: env.get("TEST_MODE").required().asBool(),
    PORT: env.get("PORT").required().asPortNumber(),
    ADMIN_TOKEN_KEY: env.get("ADMIN_TOKEN_KEY").required().asString(),
    URL_CHECK: env.get("URL_CHECK").required().asString(),
};
exports.default = envs;
