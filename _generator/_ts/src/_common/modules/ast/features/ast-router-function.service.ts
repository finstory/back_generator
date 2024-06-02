import ServicesInjector from "@services_injector";
import throwError from "@throw_error";

import traverse, { Node } from '@babel/traverse';
import { RequestType, TextCode, RouteExpressAst } from '@interfaces';
import { Pos } from '@interfaces';

import { astToTextCode, codeToAst } from "../_utils/transform.util";

import fs from 'fs';
import { generateControllerName, getEndpointNames } from "@/_common/utils/controller.util";

interface RouteExpressDto {
    endpoint: string,
    requestType: RequestType,
}

interface RouteExpressDtoV1 extends RouteExpressDto {
    validateActive: string,
}

class AstRouteFunction extends ServicesInjector {

    private hasRouteFunction = (expression: RouteExpressAst, endpoint: string, requestType: RequestType): boolean => {
        if (
            expression.type === "CallExpression" &&
            expression.callee.type === "MemberExpression" &&
            expression.callee.object.type === "Identifier" &&
            expression.callee.property.type === "Identifier" &&
            expression.callee.object.name === "router" &&
            expression.callee.property.name === requestType &&
            expression.arguments.some(arg => arg.type === "StringLiteral" && arg.value === endpoint)
        ) return true;
        else return false;
    };

    //% Express Router:

    renameEndpoint = (textCode: TextCode, { endpoint, requestType }: RouteExpressDto,
        newEndpoint: string) => {

        const ast = codeToAst(textCode);
        let ok = false;
        traverse(ast, {

            ExpressionStatement: (path) => {

                const expression = path.node.expression as RouteExpressAst;
                const check = this.hasRouteFunction(expression, endpoint, requestType);

                if (check) expression.arguments.forEach(arg => {
                    if (arg.type === "StringLiteral") {
                        arg.value = newEndpoint;
                        ok = true;
                    }
                });

            }

        });
        !ok && throwError("not_found", `[AST] Endpoint '${endpoint}'`);
        return astToTextCode(ast);
    }

    renameController = (textCode: TextCode, { endpoint, requestType }: RouteExpressDto, newController: string) => {

        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {
            ExpressionStatement: (path) => {

                const expression = path.node.expression as RouteExpressAst;
                const check = this.hasRouteFunction(expression, endpoint, requestType);

                if (check) expression.arguments.forEach(arg => {

                    if (arg.type === "MemberExpression" && arg.object.type === "Identifier") {
                        arg.property.name = newController;
                        ok = true;
                    }
                });

            }

        });

        !ok && throwError("not_found", `[AST] Endpoint '${endpoint}'`);
        return astToTextCode(ast);
    }

    switchValidation = (textCode: TextCode, { endpoint, requestType, validateActive }: RouteExpressDtoV1) => {
        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {
            ExpressionStatement: (path) => {

                const expression = path.node.expression as RouteExpressAst;
                const check = this.hasRouteFunction(expression, endpoint, requestType);

                if (check) {

                    const controller_ast = expression.arguments.find(arg => arg.type === "MemberExpression" && arg.object.name === "controller");
                    const validator_ast = expression.arguments.find(arg => arg.type === "MemberExpression" && arg.object.name === "validation");

                    if (!validateActive)
                        expression.arguments = expression.arguments.filter(arg => {
                            if (arg.type === "StringLiteral") return arg;
                            if (arg.type === "MemberExpression" &&
                                arg.object.type === "Identifier" &&
                                arg.object.name !== "validation") {
                                ok = true;
                                return arg;
                            }

                        })
                    else if (!validator_ast && controller_ast) {
                        expression.arguments.splice(1, 0,
                            {
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
                            }
                        );
                        ok = true;
                    }
                    else if (validator_ast) ok = true;

                }
            }
        });

        !ok && throwError("not_found", `[AST] Endpoint '${endpoint}'`);
        return astToTextCode(ast);
    }

}
export default AstRouteFunction;