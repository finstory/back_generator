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
const _throw_error_1 = __importDefault(require("../../../config/errors/throw-error.js"));
const traverse_1 = __importDefault(require("@babel/traverse"));
const wordsManager_1 = require("../../../helpers/wordsManager");
const _utils_1 = require("../../../utils/_index.js");
class AstClassService {
    constructor() {
        this.removeProperty = (textCode_1, _a) => __awaiter(this, [textCode_1, _a], void 0, function* (textCode, { className, propName, comment }) {
            const ast = (0, _utils_1.codeToAst)(textCode);
            let ok = false;
            let isFirstProp = false;
            (0, traverse_1.default)(ast, {
                ClassDeclaration: (path) => {
                    const expression = path.node;
                    if (expression.id.name === className) {
                        let newBody = expression.body.body.filter((prop, index) => {
                            if (prop.key.name === propName) {
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
            !ok && (0, _throw_error_1.default)("AST", "not_found", `[AST] Class property '${propName}' in class '${className}'`);
            (0, wordsManager_1.printInfo)("AST", `Class property '${propName}' in class '${className}' removed.`);
            return yield (0, _utils_1.astToTextCode)(ast);
        });
    }
}
exports.default = AstClassService;
