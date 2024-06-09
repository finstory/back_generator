
import throwError from "@throw_error";

import traverse, { Node } from "@babel/traverse";
import { TextCode, Pos } from "@interfaces";

import { astToTextCode, codeToAst } from "@utils";
import { printInfo } from "@helpers/wordsManager";

interface AstCompilerFunction {
    type: "AssignmentExpression";
    left: {
        type: string;
        start: number;
        end: number;
        loc: {
            start: {
                line: number;
                column: number;
                index: number;
            };
            end: {
                line: number;
                column: number;
                index: number;
            };
        };
        object: {
            type: string;
            start: number;
            end: number;
            loc: {
                start: {
                    line: number;
                    column: number;
                    index: number;
                };
                end: {
                    line: number;
                    column: number;
                    index: number;
                };
                identifierName: string;
            };
            name: string;
        };
        computed: boolean;
        property: {
            type: string;
            start: number;
            end: number;
            loc: {
                start: {
                    line: number;
                    column: number;
                    index: number;
                };
                end: {
                    line: number;
                    column: number;
                    index: number;
                };
                identifierName: string;
            };
            name: string;
        };
    };
    // right: {
    //     type: string;
    //     start: number;
    //     end: number;
    //     loc: {
    //         start: {
    //             line: number;
    //             column: number;
    //             index: number;
    //         };
    //         end: {
    //             line: number;
    //             column: number;
    //             index: number;
    //         };
    //     };
    //     id: null;
    //     generator: boolean;
    //     async: boolean;
    //     params: [
    //         {
    //             type: string;
    //             start: number;
    //             end: number;
    //             loc: {
    //                 start: {
    //                     line: number;
    //                     column: number;
    //                     index: number;
    //                 };
    //                 end: {
    //                     line: number;
    //                     column: number;
    //                     index: number;
    //                 };
    //             };
    //             properties: [
    //                 {
    //                     type: string;
    //                     start: number;
    //                     end: number;
    //                     loc: {
    //                         start: {
    //                             line: number;
    //                             column: number;
    //                             index: number;
    //                         };
    //                         end: {
    //                             line: number;
    //                             column: number;
    //                             index: number;
    //                         };
    //                     };
    //                     method: boolean;
    //                     key: {
    //                         type: string;
    //                         start: number;
    //                         end: number;
    //                         loc: {
    //                             start: {
    //                                 line: number;
    //                                 column: number;
    //                                 index: number;
    //                             };
    //                             end: {
    //                                 line: number;
    //                                 column: number;
    //                                 index: number;
    //                             };
    //                             identifierName: string;
    //                         };
    //                         name: string;
    //                     };
    //                     computed: boolean;
    //                     shorthand: boolean;
    //                     value: {
    //                         type: string;
    //                         start: number;
    //                         end: number;
    //                         loc: {
    //                             start: {
    //                                 line: number;
    //                                 column: number;
    //                                 index: number;
    //                             };
    //                             end: {
    //                                 line: number;
    //                                 column: number;
    //                                 index: number;
    //                             };
    //                             identifierName: string;
    //                         };
    //                         name: string;
    //                     };
    //                     extra: {
    //                         shorthand: boolean;
    //                     };
    //                 }
    //             ];
    //         },
    //         {
    //             type: string;
    //             start: number;
    //             end: number;
    //             loc: {
    //                 start: {
    //                     line: number;
    //                     column: number;
    //                     index: number;
    //                 };
    //                 end: {
    //                     line: number;
    //                     column: number;
    //                     index: number;
    //                 };
    //                 identifierName: string;
    //             };
    //             name: string;
    //         }
    //     ];
    //     body: {
    //         type: string;
    //         start: number;
    //         end: number;
    //         loc: {
    //             start: {
    //                 line: number;
    //                 column: number;
    //                 index: number;
    //             };
    //             end: {
    //                 line: number;
    //                 column: number;
    //                 index: number;
    //             };
    //         };
    //         body: any[]; // You can replace `any[]` with the appropriate type for the body
    //         directives: any[]; // You can replace `any[]` with the appropriate type for the directives
    //     };
    // };
}

class CompilerFunctionDto {
    compilerName: string;
    propName: string;
}

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
}
export default AstFunctionCompilerService;
