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
//! fs.writeFileSync('constants.json', JSON.stringify(expression));
const _throw_error_1 = __importDefault(require("../../../config/errors/throw-error.ts"));
const traverse_1 = __importDefault(require("@babel/traverse"));
const wordsManager_1 = require("../../../helpers/wordsManager");
const _utils_1 = require("../../../utils/_index.ts");
class AstClassDecoratorService {
    constructor() {
        this.getDecoratorByProperty = (textCode_1, _a) => __awaiter(this, [textCode_1, _a], void 0, function* (textCode, { className, name }) {
            const decoratorsList = [];
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ClassDeclaration: (path) => {
                    const expression = path.node;
                    if (expression.id.name === className) {
                        ok = true;
                        expression.body.body.forEach((prop) => {
                            if (prop.key.name === name && prop.decorators) {
                                prop.decorators.forEach((decorator) => {
                                    var _a;
                                    const decoratorsCallee = decorator.expression.callee;
                                    if (decoratorsCallee.type === "MemberExpression" &&
                                        ((_a = decoratorsCallee.object) === null || _a === void 0 ? void 0 : _a.name) === "V") {
                                        decoratorsList.push({ decoratorType: "ClassValidator", name: decoratorsCallee.property.name });
                                    }
                                    else if (decoratorsCallee.type === "Identifier") {
                                        ok = true;
                                        decoratorsList.push({ decoratorType: "ClassValidator", name: decoratorsCallee.name });
                                    }
                                });
                            }
                        });
                    }
                },
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `Class property ${name} in class ${className}`);
            (0, wordsManager_1.printInfo)("AST", `Decorators of class property '${name}' in class '${className}' found.`);
            return decoratorsList;
        });
        this.addDecoratorToProperty = (textCode_1, _a, _b) => __awaiter(this, [textCode_1, _a, _b], void 0, function* (textCode, { className, name, typeStringified }, { decoratorName, decoratorType, decoratorArguments = [] }) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ClassDeclaration: (path) => {
                    const expression = path.node;
                    if (expression.id.name === className) {
                        expression.body.body.forEach((prop) => {
                            if (prop.key.name === name) {
                                if (!prop.decorators)
                                    prop.decorators = [];
                                if (decoratorType === "ClassValidator")
                                    prop.decorators.push({
                                        type: "Decorator",
                                        expression: {
                                            type: "CallExpression",
                                            callee: {
                                                type: "MemberExpression",
                                                object: { type: "Identifier", name: "V" },
                                                property: { type: "Identifier", name: decoratorName }
                                            }, arguments: decoratorArguments.map((arg) => {
                                                return { type: "StringLiteral", value: arg };
                                            })
                                        }
                                    });
                                else if (decoratorType === "TypeValidator")
                                    prop.decorators.push({
                                        type: "Decorator",
                                        expression: {
                                            type: "CallExpression",
                                            callee: { type: "Identifier", name: "Type" },
                                            arguments: [{
                                                    type: "ArrowFunctionExpression",
                                                    params: [],
                                                    body: { type: "Identifier", name: typeStringified },
                                                }],
                                        }
                                    });
                                ok = true;
                            }
                        });
                    }
                },
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `[AST] Class property '${name}' in class '${className}'`);
            (0, wordsManager_1.printInfo)("AST", `Decorator '${decoratorName}' added to class property '${name}' in class '${className}'.`);
            return yield (0, _utils_1.astToTextCode)(ast, 52);
        });
        this.removeDecoratorToProperty = (textCode_1, _a, _b) => __awaiter(this, [textCode_1, _a, _b], void 0, function* (textCode, { className, name }, { decoratorName, decoratorType }) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ClassDeclaration: (path) => {
                    const expression = path.node;
                    if (expression.id.name === className) {
                        expression.body.body.forEach((prop) => {
                            if (prop.key.name === name && prop.decorators) {
                                prop.decorators = prop.decorators.filter((decorator) => {
                                    var _a;
                                    const decoratorsCallee = decorator.expression.callee;
                                    if (decoratorsCallee.type === "MemberExpression" &&
                                        ((_a = decoratorsCallee.object) === null || _a === void 0 ? void 0 : _a.name) === "V" &&
                                        decoratorsCallee.property.name === decoratorName) {
                                        ok = true;
                                        return false;
                                    }
                                    else if (decoratorsCallee.type === "Identifier" && decoratorsCallee.name === decoratorName) {
                                        ok = true;
                                        return false;
                                    }
                                    else
                                        return true;
                                });
                            }
                        });
                    }
                },
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `[AST] Class property '${name}' in class '${className}'`);
            (0, wordsManager_1.printInfo)("AST", `Decorator '${decoratorName}' removed from class property '${name}' in class '${className}'.`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
    }
}
exports.default = AstClassDecoratorService;
