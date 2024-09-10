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
const getNativeType = (typeName) => {
    switch (typeName) {
        case "TSNumberKeyword": return "number";
        case "TSStringKeyword": return "string";
        case "TSBooleanKeyword": return "boolean";
        case "TSObjectKeyword": return "object";
        case "ArrayTypeAnnotation": return "array";
        case "TSAnyKeyword": return "any";
        case "TSUnknownKeyword": return "unknown";
        case "TSBigIntKeyword": return "bigint";
        case "TSNullKeyword": return "null";
        case "TSUndefinedKeyword": return "undefined";
        case "TSNeverKeyword": return "never";
        case "TSVoidKeyword": return "void";
        case "TSSymbolKeyword": return "symbol";
        default: return null;
    }
};
class AstClassService {
    constructor() {
        this.getAllProperties = (textCode, className) => __awaiter(this, void 0, void 0, function* () {
            let propertiesList = [];
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ClassDeclaration: (path) => {
                    const expression = path.node;
                    if (expression.id.name === className) {
                        ok = true;
                        expression.body.body.forEach((prop) => {
                            const typeAnnotation = prop.typeAnnotation.typeAnnotation;
                            const propResult = {
                                className,
                                name: prop.key.name,
                                optional: prop.optional || false,
                                typePosition: {
                                    start: typeAnnotation.start, end: typeAnnotation.end
                                },
                            };
                            propertiesList.push(propResult);
                        });
                    }
                },
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `Class ${className}`);
            propertiesList.length > 0 &&
                (0, wordsManager_1.printInfo)("AST", `Properties of class '${className}' found.`);
            propertiesList = propertiesList.map((prop) => {
                const { start, end } = prop.typePosition;
                const typeStringified = textCode.substring(start, end);
                return Object.assign(Object.assign({}, prop), { typeStringified });
            });
            return propertiesList;
        });
        this.addProperty = (textCode_1, _a) => __awaiter(this, [textCode_1, _a], void 0, function* (textCode, { className, name, typeStringified, objectType }) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            (0, traverse_1.default)(ast, {
                ClassDeclaration: (path) => {
                    const expression = path.node;
                    if (expression.id.name === className) {
                        const newProp = {
                            type: "ClassProperty",
                            key: { type: "Identifier", name: name },
                            optional: false,
                            typeAnnotation: {
                                type: "TypeAnnotation",
                                typeAnnotation: { type: "StringLiteralTypeAnnotation", value: `<EDIT>${typeStringified}${objectType ? "[]" : ""}<END_EDIT>` },
                            }
                        };
                        expression.body.body.push(newProp);
                        ok = true;
                    }
                },
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `Class ${className}`);
            (0, wordsManager_1.printInfo)("AST", `Class property '${name}' in class '${className}' added.`);
            const astWithTags = yield (0, _utils_1.astToTextCode)(ast);
            return astWithTags.replace(/"<EDIT>/g, "").replace(/<END_EDIT>"/g, "");
        });
        this.removeProperty = (textCode_1, _a) => __awaiter(this, [textCode_1, _a], void 0, function* (textCode, { className, name, comment }) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            let isFirstProp = false;
            (0, traverse_1.default)(ast, {
                ClassDeclaration: (path) => {
                    const expression = path.node;
                    if (expression.id.name === className) {
                        let newBody = expression.body.body.filter((prop, index) => {
                            if (prop.key.name === name) {
                                if (index === 0)
                                    isFirstProp = true;
                                ok = true;
                                return false;
                            }
                            else
                                return true;
                        });
                        if (newBody) {
                            if (comment) {
                                const commentLine = [{ type: "CommentLine", value: comment, start: expression.body.start }];
                                if (newBody.length === 0)
                                    expression.body.innerComments = commentLine;
                                else if (isFirstProp)
                                    newBody[0].leadingComments = commentLine;
                            }
                            expression.body.body = newBody;
                        }
                    }
                },
            });
            !ok && (0, _throw_error_1.default)("AST", "not_found", `Class property ${name} in class ${className}`);
            (0, wordsManager_1.printInfo)("AST", `Class property '${name}' in class '${className}' removed.`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
    }
}
exports.default = AstClassService;
