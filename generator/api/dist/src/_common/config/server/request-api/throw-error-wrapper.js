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
const stack_filter_1 = require("../../errors/utils/stack-filter");
const send_error_1 = __importDefault(require("./send-error"));
const dotenv_1 = __importDefault(require("dotenv"));
const wordsManager_1 = require("../../../helpers/wordsManager");
dotenv_1.default.config();
const errorWrapper = (fn) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fn(req, res);
    }
    catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.name) !== "ErrorResponse") {
            let errorName = (error === null || error === void 0 ? void 0 : error.name) ? error === null || error === void 0 ? void 0 : error.name.replace(/([A-Z])/g, ' $1').toUpperCase().trim() : "ERROR";
            (0, wordsManager_1.printMsg)(`[${errorName ? errorName : "ERROR"}] ${error.message ? error === null || error === void 0 ? void 0 : error.message : "error"}`, "error");
        }
        (0, send_error_1.default)(res, error);
        if (process.env.PRINT_THROW_ERRORS_RESPONSE === 'true') {
            (0, stack_filter_1.Mark)(error.stack);
        }
    }
});
exports.default = errorWrapper;
