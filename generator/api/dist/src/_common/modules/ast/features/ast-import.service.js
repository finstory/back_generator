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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _throw_error_1 = __importDefault(require("../../../config/errors/throw-error.ts"));
const traverse_1 = __importDefault(require("@babel/traverse"));
const _utils_1 = require("../../../utils/_index.ts");
const wordsManager_1 = require("../../../helpers/wordsManager");
class AstImportService {
    constructor() {
        this.editImport = (textCode, importName, newImportName, newImportPath) => __awaiter(this, void 0, void 0, function* () {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ImportDeclaration: (path) => {
                    const astImport = path.node;
                    let importedGetting = astImport.specifiers[0].imported;
                    let localGetting = astImport.specifiers[0].local;
                    if (importedGetting && importedGetting.name === importName) {
                        if (newImportName)
                            importedGetting.name = newImportName;
                        if (newImportPath)
                            astImport.source.value = newImportPath;
                        ok = true;
                    }
                    if (localGetting && localGetting.name === importName) {
                        if (newImportName)
                            localGetting.name = newImportName;
                        if (newImportPath)
                            astImport.source.value = newImportPath;
                        ok = true;
                    }
                },
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `[AST] Import '${importName}'`);
            (0, wordsManager_1.printInfo)("AST", `Import of '${importName}' edited.`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
        this.getPosImport = (textCode, importName) => {
            let pos = { start: 0, end: 0 };
            const ast = (0, _utils_1.codeToAst)(textCode);
            (0, traverse_1.default)(ast, {
                ImportDeclaration: (path) => {
                    var _a;
                    const identifierGetting = (_a = path.node.specifiers[0]) === null || _a === void 0 ? void 0 : _a.local;
                    if (identifierGetting.name === importName) {
                        pos.start = path.node.start;
                        pos.end = path.node.end;
                    }
                },
            });
            if (pos.end !== 0) {
                (0, wordsManager_1.printInfo)("AST", ` Getting position of import '${importName}' successfully.`);
                return pos;
            }
            else
                (0, _throw_error_1.default)("AST", "not_found", `[AST] Import '${importName}'`);
        };
    }
}
exports.default = AstImportService;
