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
class AstRouteFunctionService {
    constructor() {
        this.hasRouteFunction = (expression, endpoint, requestType) => {
            if (expression.type === "CallExpression" &&
                expression.callee.type === "MemberExpression" &&
                expression.callee.object.type === "Identifier" &&
                expression.callee.property.type === "Identifier" &&
                expression.callee.object.name === "router" &&
                expression.callee.property.name === requestType &&
                expression.arguments.some(arg => arg.type === "StringLiteral" && arg.value === endpoint))
                return true;
            else
                return false;
        };
        //% Express Router :
        this.renameEndpoint = (textCode_1, _a, newEndpoint_1) => __awaiter(this, [textCode_1, _a, newEndpoint_1], void 0, function* (textCode, { endpointName, requestType }, newEndpoint) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ExpressionStatement: (path) => {
                    const expression = path.node.expression;
                    const check = this.hasRouteFunction(expression, endpointName, requestType);
                    if (check)
                        expression.arguments.forEach(arg => {
                            if (arg.type === "StringLiteral") {
                                arg.value = newEndpoint;
                                ok = true;
                            }
                        });
                }
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `Endpoint (${requestType}) ${endpointName}`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
        this.changeRequestType = (textCode_1, _a, newRequestType_1) => __awaiter(this, [textCode_1, _a, newRequestType_1], void 0, function* (textCode, { endpointName, requestType }, newRequestType) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ExpressionStatement: (path) => {
                    const expression = path.node.expression;
                    const check = this.hasRouteFunction(expression, endpointName, requestType);
                    if (check)
                        expression.callee.property.name = newRequestType;
                    ok = true;
                }
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `Endpoint (${requestType}) ${endpointName}`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
        this.renameController = (textCode_1, _a, newController_1) => __awaiter(this, [textCode_1, _a, newController_1], void 0, function* (textCode, { endpointName, requestType }, newController) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ExpressionStatement: (path) => {
                    const expression = path.node.expression;
                    const check = this.hasRouteFunction(expression, endpointName, requestType);
                    if (check)
                        expression.arguments.forEach(arg => {
                            if (arg.type === "MemberExpression" && arg.object.type === "Identifier") {
                                arg.property.name = newController;
                                ok = true;
                            }
                        });
                }
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `Endpoint (${requestType}) ${endpointName}`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
        this.switchValidation = (textCode_1, _a) => __awaiter(this, [textCode_1, _a], void 0, function* (textCode, { endpointName, requestType, validateActive }) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ExpressionStatement: (path) => {
                    const expression = path.node.expression;
                    const check = this.hasRouteFunction(expression, endpointName, requestType);
                    if (check) {
                        const middleware_ast = expression.arguments.filter(arg => arg.type === "MemberExpression" && arg.object.name === "middleware");
                        const controller_ast = expression.arguments.find(arg => arg.type === "MemberExpression" && arg.object.name === "controller");
                        const validator_ast = expression.arguments.find(arg => arg.type === "MemberExpression" && arg.object.name === "validation");
                        if (!validateActive)
                            expression.arguments = expression.arguments.filter(arg => {
                                if (arg.type === "StringLiteral")
                                    return arg;
                                if (arg.type === "MemberExpression" &&
                                    arg.object.type === "Identifier" &&
                                    arg.object.name !== "validation") {
                                    ok = true;
                                    return arg;
                                }
                            });
                        else if (!validator_ast && controller_ast) {
                            const start = middleware_ast.length ? middleware_ast.length : 1;
                            expression.arguments.splice(start, 0, {
                                type: "MemberExpression",
                                object: {
                                    type: "Identifier",
                                    name: "validation",
                                },
                                property: {
                                    type: "Identifier",
                                    name: controller_ast.property.name,
                                },
                                optional: false,
                            });
                            ok = true;
                        }
                        else if (validator_ast)
                            ok = true;
                    }
                }
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `Endpoint (${requestType}) ${endpointName}`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
        this.removeRoute = (textCode_1, _a) => __awaiter(this, [textCode_1, _a], void 0, function* (textCode, { endpointName, requestType }) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ExpressionStatement: (path) => {
                    const expression = path.node.expression;
                    if (expression.type === "CallExpression" &&
                        expression.callee.type === "MemberExpression" &&
                        expression.callee.object.type === "Identifier" &&
                        expression.callee.property.type === "Identifier" &&
                        expression.callee.object.name === "router" &&
                        expression.callee.property.name === requestType &&
                        expression.arguments.some(arg => arg.type === "StringLiteral" && arg.value === endpointName)) {
                        path.remove();
                        ok = true;
                    }
                }
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `Endpoint (${requestType}) ${endpointName}`);
            (0, wordsManager_1.printInfo)("AST", `Endpoint '${endpointName}' removed.`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
    }
}
exports.default = AstRouteFunctionService;
