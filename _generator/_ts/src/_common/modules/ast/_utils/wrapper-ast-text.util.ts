import { ParseResult } from "@babel/parser";
import { astToTextCode, codeToAst } from "./transform.util";
import { File } from "@babel/types";

export const wrapperAstText = async (textCode: string, callback: (ast: ParseResult<File>) => void): Promise<string> => {
    const ast = codeToAst(textCode);
    callback(ast);
    const textCodeEdited = await astToTextCode(ast);
    return textCodeEdited;
}