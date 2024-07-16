"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextPosition = getTextPosition;
function getTextPosition(textCode, wordToSearch, column) {
    const lineContent = textCode.split('\n')[column - 1];
    return { column, row: lineContent.indexOf(wordToSearch) };
}
