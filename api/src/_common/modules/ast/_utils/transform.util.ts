import * as parser from '@babel/parser';
import { transformFromAst } from '@babel/core';
import { Node } from '@babel/traverse';
import throwError from "@throw_error";
import prettier from 'prettier';
import promise from "@helpers/promiseWrapper";
import { TextCode } from '../../fs/_interfaces/fs.interface';

export const codeToAst = (textCode: string) => {
    return parser.parse(textCode, {
        sourceType: 'module',
        plugins: ['typescript', "decorators-legacy"],
    });
}

export const astToTextCode = async (ast: Node, printWidth? : number) => {

    const textCode: TextCode = await promise<string>((resolve, reject) => {
        transformFromAst(ast, null,
            { retainLines: true, comments: true },
            (err, result) => {
                if (err) throwError("AST", "transform_code", err.message);
                if (err) reject({ type: "transform_code", key: textCode });
                resolve(result.code);
            });
    })
        .then((data: string) => {
            return data;
        });
    return await formatCode(textCode, printWidth);

};

export const formatCode = async (textCode: string, printWidth = 1000): Promise<string> => {
    return await prettier.format(textCode, {
        parser: 'babel-ts',
        semi: true,
        singleQuote: false,
        trailingComma: 'es5',
        tabWidth: 4,
        printWidth,
        useTabs: false,
    });
};