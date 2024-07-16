"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = void 0;
const getName = (filePath) => {
    const nameFile = filePath.split("/").pop();
    return nameFile;
};
exports.getName = getName;
