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
const wordsManager_1 = require("../../../helpers/wordsManager");
const _utils_1 = require("../../../utils/_index.ts");
const calculate_position_util_1 = require("../_utils/calculate-position.util");
class AstFunctionCompilerService {
    constructor() {
        this.renameProperty = (textCode_1, _a, newPropName_1) => __awaiter(this, [textCode_1, _a, newPropName_1], void 0, function* (textCode, { compilerName, propName }, newPropName) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ExpressionStatement: (path) => {
                    var _a, _b, _c, _d;
                    const expression = path.node.expression;
                    if (((_b = (_a = expression === null || expression === void 0 ? void 0 : expression.left) === null || _a === void 0 ? void 0 : _a.object) === null || _b === void 0 ? void 0 : _b.name) === compilerName &&
                        ((_d = (_c = expression === null || expression === void 0 ? void 0 : expression.left) === null || _c === void 0 ? void 0 : _c.property) === null || _d === void 0 ? void 0 : _d.name) === propName) {
                        expression.left.property.name = newPropName;
                        ok = true;
                    }
                },
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `[AST] Compiler function '${propName}'`);
            (0, wordsManager_1.printInfo)("AST", `Compiler function '${propName}' renamed successfully.`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
        this.removeProperty = (textCode_1, _a) => __awaiter(this, [textCode_1, _a], void 0, function* (textCode, { compilerName, propName }) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ExpressionStatement: (path) => {
                    var _a, _b, _c, _d;
                    const expression = path.node.expression;
                    if (((_b = (_a = expression === null || expression === void 0 ? void 0 : expression.left) === null || _a === void 0 ? void 0 : _a.object) === null || _b === void 0 ? void 0 : _b.name) === compilerName &&
                        ((_d = (_c = expression === null || expression === void 0 ? void 0 : expression.left) === null || _c === void 0 ? void 0 : _c.property) === null || _d === void 0 ? void 0 : _d.name) === propName) {
                        path.remove();
                        ok = true;
                    }
                },
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `[AST] Compiler function '${propName}'`);
            (0, wordsManager_1.printInfo)("AST", `Compiler function '${propName}' removed successfully.`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
        this.getPosProperty = (textCode, { compilerName, propName }) => {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let columnPosition;
            (0, traverse_1.default)(ast, {
                ExpressionStatement: (path) => {
                    var _a, _b, _c, _d;
                    const expression = path.node.expression;
                    if (((_b = (_a = expression === null || expression === void 0 ? void 0 : expression.left) === null || _a === void 0 ? void 0 : _a.object) === null || _b === void 0 ? void 0 : _b.name) === compilerName &&
                        ((_d = (_c = expression === null || expression === void 0 ? void 0 : expression.left) === null || _c === void 0 ? void 0 : _c.property) === null || _d === void 0 ? void 0 : _d.name) === propName) {
                        columnPosition = path.node.loc.start.line;
                    }
                },
            });
            !columnPosition && (0, _throw_error_1.default)("AST", "not_found", `[AST] Compiler function '${propName}'`);
            const position = (0, calculate_position_util_1.getTextPosition)(textCode, propName, columnPosition);
            (0, wordsManager_1.printInfo)("AST", `Position obtained for '${compilerName}.${propName}'.`);
            return position;
        };
    }
}
exports.default = AstFunctionCompilerService;
