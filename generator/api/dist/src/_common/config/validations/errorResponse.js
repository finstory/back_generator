"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const errorsResponse = (res, formattedErrors) => {
    if (process.env.PRINT_BAD_REQUEST === 'true') {
        console.error(colors_1.default.bgRed.italic(`ERROR THROWN FOR BAD REQUEST`));
        console.error(colors_1.default.red.italic(` ${JSON.stringify(formattedErrors, null, 3)}`));
    }
    res.status(400).json({
        type: "bad_request",
        message: "Errors in Request Parameters.",
        payload: formattedErrors
    });
};
exports.default = errorsResponse;
