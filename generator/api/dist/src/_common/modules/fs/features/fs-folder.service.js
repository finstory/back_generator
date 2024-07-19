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
class FSFolder {
    constructor() {
        this.createFolder = (folderPath) => __awaiter(this, void 0, void 0, function* () {
            const nameFolder = (0, path_util_1.getName)(folderPath);
            yield (0, promiseWrapper_1.default)((resolve, reject) => {
                fs.mkdir(folderPath, (err) => {
                    if (err) {
                        if (err.message.includes("EEXIST"))
                            reject({ type: "create_folder", key: nameFolder + ", already exists" });
                        reject({ type: "create_folder", key: nameFolder });
                    }
                    resolve();
                });
            }).then(() => (0, wordsManager_1.printInfo)("FS", `Folder '${nameFolder}' created.`));
        });
        this.createFoldersList = (foldersList) => __awaiter(this, void 0, void 0, function* () {
            for (const folder of foldersList) {
                yield this.createFolder(folder);
            }
        });
        this.renameFolder = (folderPath, newName) => __awaiter(this, void 0, void 0, function* () {
            const nameFolder = (0, path_util_1.getName)(folderPath);
            const newFolderPath = folderPath.replace(nameFolder, newName);
            yield (0, promiseWrapper_1.default)((resolve, reject) => {
                fs.rename(folderPath, newFolderPath, (err) => {
                    if (err)
                        reject({ type: "rename_folder", key: nameFolder });
                    resolve();
                });
            }).then(() => (0, wordsManager_1.printInfo)("FS", `Folder '${nameFolder}' renamed to '${newName}'.`));
        });
        this.deleteFolder = (folderPath) => __awaiter(this, void 0, void 0, function* () {
            const nameFolder = (0, path_util_1.getName)(folderPath);
            yield (0, promiseWrapper_1.default)((resolve, reject) => {
                fs.rm(folderPath, { recursive: true }, (err) => {
                    if (err)
                        reject({ type: "folder_not_found", key: nameFolder });
                    resolve();
                });
            }).then(() => (0, wordsManager_1.printInfo)("FS", `Folder '${nameFolder}' deleted.`));
        });
    }
}
exports.default = FSFolder;
