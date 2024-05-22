import ServicesInjector from "@services_injector";
import throwError from "@throw_error";

import traverse, { Node } from '@babel/traverse';

import { TextCode } from '@interfaces/fs.interface';
import { Pos } from '@interfaces/ast.interface';

import { astToTextCode, codeToAst } from "../_utils/transform.util";


class AstImport extends ServicesInjector {

    editImport = (textCode: TextCode, importName: string, newImportName: string, newImportPath: string): TextCode => {
        const ast = codeToAst(textCode);

        traverse(ast, {
            ImportDeclaration: (path) => {
                const identifierGetting = path.node.specifiers[0]?.local;

                if (identifierGetting.name === importName) {
                    if (newImportPath) path.node.source.value = newImportPath;
                    if (newImportName) identifierGetting.name = newImportName;
                }
                else throwError("not_found", `[AST] Import '${importName}'`);
            }
        });

        const textCodeEdited = astToTextCode(ast);
        return textCodeEdited;

    }

    getPosImport = (textCode: TextCode, importName: string): Pos => {
        let pos: Pos = { start: 0, end: 0 };
        const ast = codeToAst(textCode);

        traverse(ast, {
            ImportDeclaration: (path) => {
                const identifierGetting = path.node.specifiers[0]?.local;

                if (identifierGetting.name === importName) {
                    pos.start = path.node.start;
                    pos.end = path.node.end;
                }
            }
        });
        if (pos.end !== 0) return pos;
        else throwError("not_found", `[AST] Import '${importName}'`);
    };

}

export default AstImport;