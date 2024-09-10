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
const code_edition_util_1 = require("../_utils/code-edition.util");
class GeneratorImport extends _services_injector_1.Injector {
    constructor() {
        super(...arguments);
        this.renameImport = (filePath, importName, newImportName, newPathName) => __awaiter(this, void 0, void 0, function* () {
            let textCode = yield this._fs_file.getFile(filePath);
            textCode = yield this._ast_import.editImport(textCode, importName, newImportName, newPathName);
            yield this._fs_file.createFile(filePath, textCode);
        });
        this.removeImport = (filePath, importName) => __awaiter(this, void 0, void 0, function* () {
            let textCode = yield this._fs_file.getFile(filePath);
            const pos = this._ast_import.getPosImport(textCode, importName);
            textCode = (0, code_edition_util_1.removeCodeBetweenPos)(textCode, pos, false);
            yield this._fs_file.createFile(filePath, textCode);
        });
    }
}
exports.default = GeneratorImport;
