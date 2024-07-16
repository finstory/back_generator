"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCodeBetweenPos = exports.insertCodeAfterPosition = void 0;
const insertCodeAfterPosition = (textCode, codeToAdd, pos, addSpace) => {
    return textCode.slice(0, pos.end) + `\n${codeToAdd}${addSpace ? "\n" : ""}` + textCode.slice(pos.end);
};
exports.insertCodeAfterPosition = insertCodeAfterPosition;
const removeCodeBetweenPos = (textCode, pos, removeDownLine = true, removeUpLine = true) => {
    let numUp = removeDownLine ? (-1) : 0;
    // if (typeof numUp === "number") numUp = removeDownLine;
    const numDown = removeUpLine ? 1 : 0;
    let codeGetting = textCode.slice(0, pos.start + numUp) + textCode.slice(pos.end + numDown);
    return codeGetting;
};
exports.removeCodeBetweenPos = removeCodeBetweenPos;
