"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _services_injector_1 = require("../../../config/services/service-injector.js");
const wordsManager_1 = require("../../../helpers/wordsManager");
class GeneratorWrapperService extends _services_injector_1.Injector {
    constructor() {
        super(...arguments);
        this.updateFile = (filePath, callback, successMessage) => __awaiter(this, void 0, void 0, function* () {
            let textCode = yield this._fs_file.getFile(filePath);
            const newTextCode = yield callback(textCode);
            yield this._fs_file.createFile(filePath, newTextCode);
            (0, wordsManager_1.printInfo)("ROUTE", successMessage);
        });
    }
}
exports.default = GeneratorWrapperService;
