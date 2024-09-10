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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const babelParser = __importStar(require("@babel/parser"));
const traverse_1 = __importDefault(require("@babel/traverse"));
const t = __importStar(require("@babel/types"));
const nameMain = () => {
    function getName(obj) {
        const code = `(${obj.toString()})`;
        const ast = babelParser.parse(code, {
            sourceType: 'module',
            plugins: ['typescript']
        });
        let path = '';
        (0, traverse_1.default)(ast, {
            MemberExpression(pathNode) {
                if (t.isIdentifier(pathNode.node.object)) {
                    path += pathNode.node.object.name + '.';
                }
                else if (t.isMemberExpression(pathNode.node.object)) {
                    //@ts-ignore
                    (0, traverse_1.default)(pathNode.node.object, this);
                }
                if (t.isIdentifier(pathNode.node.property)) {
                    path += pathNode.node.property.name;
                }
                pathNode.stop();
            }
        });
        return path;
    }
    const user = {
        name: {
            last: 'Doe'
        }
    };
    const variableGetting = user.name.last;
    getName(() => variableGetting);
};
exports.default = nameMain;
