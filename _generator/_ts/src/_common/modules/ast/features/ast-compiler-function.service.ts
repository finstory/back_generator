
import throwError from "@throw_error";

import traverse, { Node } from "@babel/traverse";
import { TextCode, AstCompilerFunction, TextPosition } from "@interfaces";
import { printInfo } from "@helpers/wordsManager";
import { astToTextCode, codeToAst } from "@utils";

import { CompilerFunctionDto } from "../_dtos/ast-compiler-function.dto";
import { getTextPosition } from "../_utils/calculate-position.util";

class AstFunctionCompilerService {

    renameProperty = async (textCode: TextCode, { compilerName, propName }: CompilerFunctionDto, newPropName: string): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {
            ExpressionStatement: (path) => {
                const expression = path.node.expression as AstCompilerFunction;

                if (expression?.left?.object?.name === compilerName &&
                    expression?.left?.property?.name === propName) {

                    expression.left.property.name = newPropName;
                    ok = true;
                }
            },
        });


        !ok && throwError("not_found", `[AST] Compiler function '${propName}'`);

        printInfo("AST", `Compiler function '${propName}' renamed successfully.`);

        return await astToTextCode(ast);
    };

    removeProperty = async (textCode: TextCode, { compilerName, propName }: CompilerFunctionDto): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {
            ExpressionStatement: (path) => {
                const expression = path.node.expression as AstCompilerFunction;

                if (expression?.left?.object?.name === compilerName &&
                    expression?.left?.property?.name === propName) {

                    path.remove();
                    ok = true;
                }
            },
        });

        !ok && throwError("not_found", `[AST] Compiler function '${propName}'`);

        printInfo("AST", `Compiler function '${propName}' removed successfully.`);

        return await astToTextCode(ast);
    }

    getPosProperty = (textCode: TextCode, { compilerName, propName }: CompilerFunctionDto): TextPosition => {

        const ast = codeToAst(textCode);
        let columnPosition: number;

        traverse(ast, {
            ExpressionStatement: (path) => {
                const expression = path.node.expression as AstCompilerFunction;

                if (expression?.left?.object?.name === compilerName &&
                    expression?.left?.property?.name === propName) {

                    columnPosition = path.node.loc.start.line;
                }
            },
        });

        !columnPosition && throwError("not_found", `[AST] Compiler function '${propName}'`);

        const position = getTextPosition(textCode, propName, columnPosition);

        printInfo("AST", `Position obtained for '${compilerName}.${propName}'.`);

        return position

    }
}
export default AstFunctionCompilerService;
