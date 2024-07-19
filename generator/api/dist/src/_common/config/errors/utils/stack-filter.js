"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mark = Mark;
const colors_1 = __importDefault(require("colors"));
function Mark(stack) {
    var _a;
    const stackLines = stack.split('\n');
    const dirList = {};
    let type;
    let result;
    for (const line of stackLines) {
        if (!dirList.controller && line.includes('controllers.ts')) {
            if (!result)
                result = line.trim();
            if (!type)
                type = "CONTROLLER";
        }
        if (!dirList.services && line.includes('services.ts')) {
            if (!result)
                result = line.trim();
            if (!type)
                type = "SERVICE";
        }
        if (dirList.controller && dirList.services) {
            break;
        }
    }
    const textResult = result.includes('(') ? "at " + ((_a = result.match(/\((.*?)\)/)) === null || _a === void 0 ? void 0 : _a[1]) || "" : result;
    if (!type)
        type = "UNKNOWN";
    console.error(colors_1.default.bgRed.italic(`ERROR THROWN IN ${type}`));
    console.error(colors_1.default.red.italic(`▶  ${textResult}`));
}
