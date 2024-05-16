"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAllPaths = void 0;
var path_1 = __importDefault(require("path"));
var fs = require("fs");
var getAbsolutePath = function (relativePath) {
    return path_1.default.resolve(__dirname, relativePath);
};
var createAllPaths = function () {
    var dataPath = getAbsolutePath("../../data/paths.json");
    var paths = [
        {
            src: getAbsolutePath("../../src"),
        },
    ];
    fs.writeFile(dataPath, JSON.stringify(paths), function (err) {
        if (err) {
            console.error(err);
            return;
        }
    });
};
exports.createAllPaths = createAllPaths;
