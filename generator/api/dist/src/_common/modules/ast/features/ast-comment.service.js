"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _throw_error_1 = __importDefault(require("../../../config/errors/throw-error.ts"));
const traverse_1 = __importDefault(require("@babel/traverse"));
const _utils_1 = require("../../../utils/_index.ts");
const wordsManager_1 = require("../../../helpers/wordsManager");
class AstCommentService {
    constructor() {
        this.getPosComment = (textCode, comment) => {
            const ast = (0, _utils_1.codeToAst)(textCode);
            const pos = { start: 0, end: 0 };
            (0, traverse_1.default)(ast, {
                enter(path) {
                    const leadingCommentsList = path.node.leadingComments;
                    const innerCommentsList = path.node.innerComments;
                    let uniqueValues = [];
                    leadingCommentsList === null || leadingCommentsList === void 0 ? void 0 : leadingCommentsList.forEach(obj => {
                        if (obj.value === comment && !uniqueValues.includes(obj.value)) {
                            pos.start = obj.start;
                            pos.end = obj.end;
                        }
                        uniqueValues.push(obj.value);
                    });
                    innerCommentsList === null || innerCommentsList === void 0 ? void 0 : innerCommentsList.forEach(obj => {
                        if (obj.value === comment && !uniqueValues.includes(obj.value)) {
                            pos.start = obj.start;
                            pos.end = obj.end;
                        }
                        uniqueValues.push(obj.value);
                    });
                },
            });
            if (pos.end !== 0) {
                (0, wordsManager_1.printInfo)("AST", `Position obtained for the comment '${comment}'.`);
                return pos;
            }
            else
                (0, _throw_error_1.default)("AST", "not_found", `[AST] Comment '${comment}'`);
        };
    }
}
exports.default = AstCommentService;
