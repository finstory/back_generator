"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs = __importStar(require("fs"));
const promiseWrapper_1 = __importDefault(require("../../../helpers/promiseWrapper"));
const path_util_1 = require("../_utils/path.util");
const wordsManager_1 = require("../../../helpers/wordsManager");
class FSFile {
    constructor() {
        this.getFile = (filePath_1, ...args_1) => __awaiter(this, [filePath_1, ...args_1], void 0, function* (filePath, jsonFormat = true) {
            const nameFile = (0, path_util_1.getName)(filePath);
            const textCode = yield (0, promiseWrapper_1.default)((resolve, reject) => {
                fs.readFile(filePath, "utf8", (err, data) => {
                    if (err)
                        reject({ type: "file_not_found", key: nameFile });
                    resolve(data);
                });
            }).then((data) => {
                (0, wordsManager_1.printInfo)("FS", `File '${nameFile}' read.`);
                if (!jsonFormat)
                    return JSON.parse(data);
                else
                    return data;
            });
            return textCode;
        });
        this.createFile = (filePath, code) => __awaiter(this, void 0, void 0, function* () {
            const nameFile = (0, path_util_1.getName)(filePath);
            yield (0, promiseWrapper_1.default)((resolve, reject) => {
                fs.writeFile(filePath, code, (err) => {
                    if (err)
                        reject({ type: "create_file", key: nameFile });
                    resolve();
                });
            }).then(() => (0, wordsManager_1.printInfo)("FS", `File '${nameFile}' created.`));
        });
        this.createFilesList = (filesList) => __awaiter(this, void 0, void 0, function* () {
            for (const file of filesList) {
                yield this.createFile(file.path, file.code);
            }
        });
        this.replaceFile = (filePath, code) => __awaiter(this, void 0, void 0, function* () {
            const nameFile = (0, path_util_1.getName)(filePath);
            yield (0, promiseWrapper_1.default)((resolve, reject) => {
                fs.writeFile(filePath, code, (err) => {
                    if (err)
                        reject({ type: "create_file", key: nameFile });
                    resolve();
                });
            }).then(() => (0, wordsManager_1.printInfo)("FS", `File '${nameFile}' replaced successfully.`));
        });
        this.renameFile = (filePath, newName) => __awaiter(this, void 0, void 0, function* () {
            const nameFile = (0, path_util_1.getName)(filePath);
            const newFilePath = filePath.replace(nameFile, newName);
            yield (0, promiseWrapper_1.default)((resolve, reject) => {
                fs.rename(filePath, newFilePath, (err) => {
                    if (err)
                        reject({ type: "rename_file", key: nameFile });
                    resolve();
                });
            }).then(() => (0, wordsManager_1.printInfo)("FS", `File '${nameFile}' renamed to '${newName}'.`));
        });
        this.deleteFile = (filePath) => __awaiter(this, void 0, void 0, function* () {
            const nameFile = (0, path_util_1.getName)(filePath);
            yield (0, promiseWrapper_1.default)((resolve, reject) => {
                fs.unlink(filePath, (err) => {
                    if (err)
                        reject({ type: "file_not_found", key: nameFile });
                    resolve();
                });
            }).then(() => (0, wordsManager_1.printInfo)("FS", `File '${nameFile}' deleted.`));
        });
        this.updateFile = (filePath, callback) => __awaiter(this, void 0, void 0, function* () {
            let textCode = yield this.getFile(filePath);
            const newTextCode = yield callback(textCode);
            yield this.createFile(filePath, newTextCode);
        });
    }
}
exports.default = FSFile;
