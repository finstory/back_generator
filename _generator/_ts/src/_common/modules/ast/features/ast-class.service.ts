
import throwError from "@throw_error";

import traverse, { Node } from "@babel/traverse";
import { TextCode, AstCompilerFunction, TextPosition, AstClassDeclaration, AstClassProperty, CommentLine } from "@interfaces";
import { printInfo } from "@helpers/wordsManager";
import { astToTextCode, codeToAst } from "@utils";

import { CompilerFunctionDto } from "../_dtos/ast-compiler-function.dto";
import { getTextPosition } from "../_utils/calculate-position.util";

class AstClassService {

    removeProperty = async (textCode: TextCode, { className, propName, comment }: { className: string, propName: string, comment?: string }): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;
        let isFirstProp = false;
        traverse(ast, {
            ClassDeclaration: (path) => {
                const expression = path.node as AstClassDeclaration;

                if (expression.id.name === className) {

                    let newBody = expression.body.body.filter((prop: AstClassProperty, index) => {
                        if (prop.key.name === propName) {
                            if (index === 0) isFirstProp = true;
                            ok = true; return false;
                        }
                        else return true;
                    });

                    if (newBody) {
                     
                        if (comment) {
                            const commentLine: CommentLine[] = [{ type: "CommentLine", value: comment, start: expression.body.start }];

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

        !ok && throwError("AST","not_found", `[AST] Class property '${propName}' in class '${className}'`);

        printInfo("AST", `Class property '${propName}' in class '${className}' removed.`);

        return await astToTextCode(ast);
    };

}
export default AstClassService;
