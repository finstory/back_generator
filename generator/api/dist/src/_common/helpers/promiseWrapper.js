"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _throw_error_1 = __importDefault(require("../config/errors/throw-error.ts"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const showSuccessMsg = process.env.PRINT_SUCCESS_MSG_IN_PROMISE_WRAPPER === "true";
const promise = (callback_1, msgSuccess_1, ...args_1) => __awaiter(void 0, [callback_1, msgSuccess_1, ...args_1], void 0, function* (callback, msgSuccess, timer = 2) {
    let setTimer;
    return yield new Promise((resolve, reject) => {
        callback(resolve, reject);
        setTimer = setTimeout(() => {
            reject("timeout");
        }, timer * 1000);
    })
        .then((result) => {
        clearTimeout(setTimer);
        if (showSuccessMsg)
            msgSuccess && console.log(msgSuccess);
        if (result)
            return result;
    })
        .catch((err) => {
        clearTimeout(setTimer);
        if (err === "timeout")
            (0, _throw_error_1.default)("PROMISE", "request_timeout", "promise_wrapper");
        else
            (0, _throw_error_1.default)("PROMISE", err.type, err.key);
    });
});
exports.default = promise;
