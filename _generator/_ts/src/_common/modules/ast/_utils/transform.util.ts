import * as parser from '@babel/parser';
import { transformFromAst } from '@babel/core';
import { Node } from '@babel/traverse';
import throwError from "@throw_error";

export const codeToAst = (textCode: string) => {
    return parser.parse(textCode, {
        sourceType: 'module',
        plugins: ['typescript'],
    });
}

export const astToTextCode = (ast: Node) => {
    let textCode: string;

    transformFromAst(ast, null,
        { retainLines: true, comments: true },
        (err, result) => {
            if (err) throwError("transform_code", err.message);
            textCode = result.code;
        });

    return textCode;
};