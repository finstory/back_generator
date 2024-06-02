import ServicesInjector from "@services_injector";
import throwError from "@throw_error";

import traverse, { Node } from '@babel/traverse';
import { RequestType, TextCode, RouteExpressAst } from '@interfaces';
import { Pos } from '@interfaces';

import { astToTextCode, codeToAst } from "../_utils/transform.util";

import fs from 'fs';
import { generateControllerName, getEndpointNames } from "@/_common/utils/controller.util";


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

    //% Express Router:

    editRouterFunction = (textCode: TextCode, moduleName: string, endpoint: string, requestType: RequestType, newEndpoint?: string, newRequestType?: RequestType, validateActive: boolean = true) => {
        const ast = codeToAst(textCode);

        traverse(ast, {
            ExpressionStatement: (path) => {

                const expression = path.node.expression as RouteExpressAst;

                if (
                    expression.type === "CallExpression" &&
                    expression.callee.type === "MemberExpression" &&
                    expression.callee.object.type === "Identifier" &&
                    expression.callee.property.type === "Identifier" &&
                    expression.callee.object.name === "router" &&
                    !expression.arguments.some(arg => arg.type === "StringLiteral" && arg.value === endpoint)
                )
                    throwError("not_found", `[AST] Endpoint '${endpoint}'`);

                const request_type_ast = expression.callee.property;
                const validator_ast = expression.arguments.find(arg => arg.type === "MemberExpression" && arg.object.name === "validation");
                const controller_ast = expression.arguments.find(arg => arg.type === "MemberExpression" && arg.object.name === "controller");

                if (!validateActive)
                    expression.arguments = expression.arguments.filter(arg => {
                        if (arg.type === "StringLiteral") return arg;
                        if (arg.type === "MemberExpression" &&
                            arg.object.type === "Identifier" &&
                            arg.object.name !== "validation")
                            return arg;

                    })
                else if (!validator_ast)
                    expression.arguments.splice(1, 0, {
                        type: "MemberExpression",
                        object: {
                            type: "Identifier",
                            name: "validation",
                        },
                        property: {
                            type: "Identifier",
                            name: generateControllerName(moduleName, newEndpoint || endpoint, requestType),
                        },
                        optional: false,
                    });

                const controllerName = generateControllerName(moduleName, newEndpoint || endpoint, requestType);

                if (request_type_ast) request_type_ast.name = newRequestType;
                if (validator_ast) validator_ast.property.name = controllerName;
                if (controller_ast) controller_ast.property.name = controllerName;
            }

        });
        return astToTextCode(ast);

    }
}
export default AstFunction;