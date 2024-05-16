"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowerCaseToFirstLetter = exports.printMsg = exports.textColor = exports.underscoreToUpperCase = exports.UpFirst = void 0;
var colors_1 = __importDefault(require("colors"));
function UpFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.UpFirst = UpFirst;
function lowerCaseToFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
exports.lowerCaseToFirstLetter = lowerCaseToFirstLetter;
function underscoreToUpperCase(str) {
    return str.split('_').map(function (word, index) {
        return index === 0 ? word : UpFirst(word);
    }).join('');
}
exports.underscoreToUpperCase = underscoreToUpperCase;
function textColor(str, color) {
    if (color === void 0) { color = 'green'; }
    if (color === "green")
        return colors_1.default.green(str);
    if (color === "red")
        return colors_1.default.red(str);
    return str;
}
exports.textColor = textColor;
function printMsg(str, color) {
    if (color === void 0) { color = 'success'; }
    if (color === "success")
        console.log(colors_1.default.green.bold(str));
    if (color === "warning")
        console.log(colors_1.default.yellow(str));
    if (color === "error")
        console.log(colors_1.default.red.bold(str));
}
exports.printMsg = printMsg;
