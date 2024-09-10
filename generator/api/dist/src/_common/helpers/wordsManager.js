"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpFirst = UpFirst;
exports.underscoreToUpperCase = underscoreToUpperCase;
exports.textColor = textColor;
exports.printInfo = printInfo;
exports.printMsg = printMsg;
exports.lowerCaseToFirstLetter = lowerCaseToFirstLetter;
exports.upperCaseToHyphen = upperCaseToHyphen;
exports.hyphenToClassName = hyphenToClassName;
exports.underscoreToClassName = underscoreToClassName;
const colors_1 = __importDefault(require("colors"));
function UpFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function lowerCaseToFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
function underscoreToUpperCase(str) {
    return str
        .split("_")
        .map((word, index) => {
        return index === 0 ? word : UpFirst(word);
    })
        .join("");
}
function underscoreToClassName(str) {
    return str
        .split("_")
        .map((word) => {
        return UpFirst(word);
    })
        .join("");
}
function upperCaseToHyphen(str) {
    return str
        .split("")
        .map((letter, index) => {
        if (index !== 0 && letter === letter.toUpperCase()) {
            return "-" + letter.toLowerCase();
        }
        return letter.toLowerCase();
    })
        .join("");
}
function hyphenToClassName(str) {
    return str
        .split("-")
        .map((word) => {
        return UpFirst(word);
    })
        .join("");
}
function textColor(str, color = "green") {
    if (color === "green")
        return colors_1.default.green(str);
    if (color === "red")
        return colors_1.default.red(str);
    return str;
}
const showFSLogs = true;
const showASTLogs = true;
const showGeneratorLogs = true;
const showJsonDBLogs = true;
const showBlueList = true;
function printInfo(type, str) {
    if (type === "FS" && showFSLogs)
        console.log(`[${colors_1.default.green(type)}]` + colors_1.default.green(" ⭍  ") + (str) + colors_1.default.green(" ⭍  "));
    else if (type === "AST" && showASTLogs)
        console.log(`[${colors_1.default.yellow(type)}]` + colors_1.default.yellow(" ⭍  ") + (str) + colors_1.default.yellow(" ⭍  "));
    else if (type === "GENERATOR" && showGeneratorLogs)
        console.log(`[${colors_1.default.magenta(type)}]` + colors_1.default.magenta(" ⭍  ") + (str) + colors_1.default.magenta(" ⭍  "));
    else if (type === "JSON_DB" && showJsonDBLogs)
        console.log(`[${colors_1.default.gray(type)}]` + colors_1.default.gray(" ⭍  ") + (str) + colors_1.default.gray(" ⭍  "));
    else
        console.log(`[${colors_1.default.blue(type)}]` + colors_1.default.blue(" ⭍  ") + (str) + colors_1.default.blue(" ⭍  "));
}
function printMsg(str, color = "generator") {
    if (color === "generator")
        console.log(colors_1.default.magenta(str));
    if (color === "warning")
        console.log(colors_1.default.yellow(str));
    if (color === "error")
        console.log(colors_1.default.red(str));
}
