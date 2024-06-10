
import throwError from "@throw_error";

import traverse, { Node } from "@babel/traverse";
import { TextCode, AstCompilerFunction, TextPosition, AstClassDeclaration, AstClassProperty } from "@interfaces";
import { printInfo } from "@helpers/wordsManager";
import { astToTextCode, codeToAst } from "@utils";

import { CompilerFunctionDto } from "../_dtos/ast-compiler-function.dto";
import { getTextPosition } from "../_utils/calculate-position.util";

class AstClassService {

    removeProperty = async (textCode: TextCode, { className, propName }: { className: string, propName: string }): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {
            ClassDeclaration: (path) => {
                const expression = path.node as AstClassDeclaration;

                if (expression.id.name === className) {
                    const classBody = expression.body.body;

                    classBody.forEach((prop: AstClassProperty, index) => {
                        if (prop.key.name === propName) {
                            classBody.splice(index, 1);
                            ok = true;
                        }
                    });
                }
            },
        });

        !ok && throwError("not_found", `[AST] Class property '${propName}' in class '${className}'`);

        printInfo("AST", `Class property '${propName}' in class '${className}' removed.`);

        return await astToTextCode(ast);
    };

}
export default AstClassService;
