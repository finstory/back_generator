import ServicesInjector from "@services_injector";
import throwError from "@throw_error";

import traverse, { Node } from '@babel/traverse';
import { RequestType, TextCode, AstRouteExpress } from '@interfaces';

import { astToTextCode, codeToAst } from "@utils";
import { RouteExpressDto, RouteExpressDtoV1 } from "../_dtos/ast-route-function.dto";
import { printInfo } from "@/_common/helpers/wordsManager";

class AstRouteFunctionService {

    private hasRouteFunction = (expression: AstRouteExpress, endpoint: string, requestType: RequestType): boolean => {
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

    //% Express Router :

    renameEndpoint = async (textCode: TextCode, { endpoint, requestType }: RouteExpressDto, newEndpoint: string): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;
        traverse(ast, {

            ExpressionStatement: (path) => {

                const expression = path.node.expression as AstRouteExpress;
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
        return await astToTextCode(ast);


    }


    changeRequestType = async (textCode: TextCode, { endpoint, requestType }: RouteExpressDto, newRequestType: RequestType): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {
            ExpressionStatement: (path) => {

                const expression = path.node.expression as AstRouteExpress;
                const check = this.hasRouteFunction(expression, endpoint, requestType);

                if (check) expression.callee.property.name = newRequestType;
                ok = true;

            }

        });

        !ok && throwError("not_found", `[AST] Endpoint '${endpoint}'`);
        return await astToTextCode(ast);
    }

    renameController = async (textCode: TextCode, { endpoint, requestType }: RouteExpressDto, newController: string): Promise<TextCode> => {
        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {
            ExpressionStatement: (path) => {

                const expression = path.node.expression as AstRouteExpress;
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
        return await astToTextCode(ast);
    }

    switchValidation = async (textCode: TextCode, { endpoint, requestType, validateActive }: RouteExpressDtoV1): Promise<TextCode> => {
        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {
            ExpressionStatement: (path) => {

                const expression = path.node.expression as AstRouteExpress;
                const check = this.hasRouteFunction(expression, endpoint, requestType);

                if (check) {
                    const middleware_ast = expression.arguments.filter(arg => arg.type === "MemberExpression" && arg.object.name === "middleware");
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
                        const start = middleware_ast.length ? middleware_ast.length : 1;
                        expression.arguments.splice(start, 0,
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
        return await astToTextCode(ast);
    }

    removeRoute = async (textCode: TextCode, { endpoint, requestType }: RouteExpressDto): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;
        traverse(ast, {

            ExpressionStatement: (path) => {

                const expression = path.node.expression as AstRouteExpress;
                if (
                    expression.type === "CallExpression" &&
                    expression.callee.type === "MemberExpression" &&
                    expression.callee.object.type === "Identifier" &&
                    expression.callee.property.type === "Identifier" &&
                    expression.callee.object.name === "router" &&
                    expression.callee.property.name === requestType &&
                    expression.arguments.some(
                        arg => arg.type === "StringLiteral" && arg.value === endpoint
                    )
                ) {
                    path.remove();
                    ok = true;
                }
            }
        });
        !ok && throwError("not_found", `[AST] Endpoint '${endpoint}'`);
        printInfo("AST", `Endpoint '${endpoint}' removed.`);
        return await astToTextCode(ast);
    }
}
export default AstRouteFunctionService;