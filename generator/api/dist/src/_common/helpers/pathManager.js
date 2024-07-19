"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAllPaths = void 0;
const path_1 = __importDefault(require("path"));
const fs = require("fs");
const getAbsolutePath = (relativePath) => {
    return path_1.default.resolve(__dirname, relativePath);
};
const createAllPaths = () => {
    const dataPath = getAbsolutePath("../../data/paths.json");
    const paths = [
        {
            src: getAbsolutePath("../../src"),
        },
    ];
    fs.writeFile(dataPath, JSON.stringify(paths), (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};
exports.createAllPaths = createAllPaths;
