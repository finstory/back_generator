//! fs.writeFileSync('constants.json', JSON.stringify(expression));
import throwError from "@throw_error";

import traverse, { Node } from "@babel/traverse";
import { TextCode, AstCompilerFunction, TextPosition, AstClassDeclaration, AstClassProperty, CommentLine, AstClassDecorators } from "@interfaces";
import { printInfo } from "@helpers/wordsManager";
import { astToTextCode, codeToAst } from "@utils";

import { CompilerFunctionDto } from "../_dtos/ast-compiler-function.dto";
import { getTextPosition } from "../_utils/calculate-position.util";
import fs from 'fs';
import { ValidatorOptionDto } from "@/app/validation/_dtos/validation-fn.dto";
import { property } from "lodash";
import { ClassPropertyDto, PropertyDecoratorDto } from "../_dtos/ast-class.dto";


class AstClassDecoratorService {

    getDecoratorByProperty = async (
        textCode: string, { className, name }: ClassPropertyDto
    ): Promise<ValidatorOptionDto[]> => {

        const decoratorsList = [];
        const ast = codeToAst(textCode);
        let ok = false;
        traverse(ast,
            {
                ClassDeclaration: (path) => {
                    const expression = path.node as AstClassDeclaration;
                    
                    if (expression.id.name === className) {
                        
                        ok = true;

                        expression.body.body.forEach((prop: AstClassProperty) => {
                            if (prop.key.name === name && prop.decorators) {
                                
                                prop.decorators.forEach((decorator) => {

                                    const decoratorsCallee = decorator.expression.callee;

                                    if (decoratorsCallee.type === "MemberExpression" &&
                                        decoratorsCallee.object?.name === "V"
                                    ) {
                                        decoratorsList.push({ decoratorType: "ClassValidator", name: decoratorsCallee.property.name });
                                    }
                                    else if (decoratorsCallee.type === "Identifier") {
                                        ok = true;
                                        decoratorsList.push({ decoratorType: "ClassValidator", name: decoratorsCallee.name });
                                    }
                                });
                            }
                        });
                    }

                },
            });

        !ok && throwError("AST", "not_found", `Class property ${name} in class ${className}`);

        printInfo("AST", `Decorators of class property '${name}' in class '${className}' found.`);

        return decoratorsList;
    };

    addDecoratorToProperty = async (
        textCode: string,
        { className, name, typeStringified }: ClassPropertyDto,
        { decoratorName, decoratorType, decoratorArguments = [] }: PropertyDecoratorDto
    ): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;
        traverse(ast, {
            ClassDeclaration: (path) => {
                const expression = path.node as AstClassDeclaration;

                if (expression.id.name === className) {

                    expression.body.body.forEach((prop) => {
                        if (prop.key.name === name) {
                            if (!prop.decorators) prop.decorators = [];

                            if (decoratorType === "ClassValidator")
                                prop.decorators.push({
                                    type: "Decorator",
                                    expression: {
                                        type: "CallExpression",
                                        callee: {
                                            type: "MemberExpression",
                                            object: { type: "Identifier", name: "V" },
                                            property: { type: "Identifier", name: decoratorName }
                                        }, arguments: decoratorArguments.map((arg) => {
                                            return { type: "StringLiteral", value: arg }
                                        })
                                    }
                                });

                            else if (decoratorType === "TypeValidator")
                                prop.decorators.push({
                                    type: "Decorator",
                                    expression: {
                                        type: "CallExpression",
                                        callee: { type: "Identifier", name: "Type" },
                                        arguments: [{
                                            type: "ArrowFunctionExpression",
                                            params: [],
                                            body: { type: "Identifier", name: typeStringified },
                                        }],
                                    }
                                });

                            ok = true;
                        }

                    });

                }
            },
        });

        !ok && throwError("AST", "not_found", `[AST] Class property '${name}' in class '${className}'`);

        printInfo("AST", `Decorator '${decoratorName}' added to class property '${name}' in class '${className}'.`);

        return await astToTextCode(ast, 52);
    }

    removeDecoratorToProperty = async (
        textCode: string, { className, name }: ClassPropertyDto,
        { decoratorName, decoratorType }: PropertyDecoratorDto
    ): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;
        traverse(ast, {
            ClassDeclaration: (path) => {
                const expression = path.node as AstClassDeclaration;

                if (expression.id.name === className) {

                    expression.body.body.forEach((prop) => {
                        if (prop.key.name === name && prop.decorators) {
                            prop.decorators = prop.decorators.filter((decorator) => {
                                const decoratorsCallee = decorator.expression.callee;

                                if (decoratorsCallee.type === "MemberExpression" &&
                                    decoratorsCallee.object?.name === "V" &&
                                    decoratorsCallee.property.name === decoratorName
                                ) {
                                    ok = true;
                                    return false;
                                }
                                else if (decoratorsCallee.type === "Identifier" && decoratorsCallee.name === decoratorName) {
                                    ok = true;
                                    return false;
                                }
                                else return true;
                            });
                        }
                    });

                }
            },
        });

        !ok && throwError("AST", "not_found", `[AST] Class property '${name}' in class '${className}'`);

        printInfo("AST", `Decorator '${decoratorName}' removed from class property '${name}' in class '${className}'.`);

        return await astToTextCode(ast);
    }
}
export default AstClassDecoratorService;
