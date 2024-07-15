import ServicesInjector from "@services_injector";
import throwError from "@throw_error";

import traverse, { Node } from '@babel/traverse';

import { TextCode } from '@interfaces/fs.interface';
import { Pos } from '@interfaces/ast.interface';

import { astToTextCode, codeToAst } from "../_utils/transform.util";


class AstFunction extends ServicesInjector {

    editFunctionProperty = (textCode: TextCode, compilerName: string, propName: string, newPropName: string) => {
        const ast = codeToAst(textCode);
        let ok = false;
        traverse(ast, {
            ExpressionStatement: (path) => {
                const expression = path.node.expression;

                if (
                    expression.type === "AssignmentExpression"
                    && expression.left.type === "MemberExpression"
                    && expression.left.object.type === "Identifier"
                    && expression.left.property.type === "Identifier"
                    && expression.left.object.name === compilerName
                    && expression.left.property.name === propName
                ) {
                    expression.left.property.name = newPropName;
                    ok = true;
                }
            }
        });

        if (!ok) throwError("not_found", `[AST] Function '${propName}'`);

        const textCodeEdited = astToTextCode(ast);
        return textCodeEdited;
    };

    getPosFunctionProperty = (textCode: TextCode, compilerName: string, propName: string): Pos => {
        const pos: Pos = { start: 0, end: 0 };
        const ast = codeToAst(textCode);

        traverse(ast, {
            ExpressionStatement: (path) => {
                const expression = path.node.expression;

                if (
                    expression.type === "AssignmentExpression"
                    && expression.left.type === "MemberExpression"
                    && expression.left.object.type === "Identifier"
                    && expression.left.property.type === "Identifier"
                    && expression.left.object.name === compilerName
                    && expression.left.property.name === propName
                ) {
                    pos.start = path.node.start;
                    pos.end = path.node.end;
                }

            }
        });
        if (pos.end !== 0) return pos;
        else throwError("not_found", `Function '${propName}'`);
        return pos;
    };


}

export default AstFunction;