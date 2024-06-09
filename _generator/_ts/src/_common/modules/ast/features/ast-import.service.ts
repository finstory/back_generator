
import throwError from "@throw_error";

import traverse, { Node } from "@babel/traverse";

import { AstImportDeclaration, TextCode } from "@interfaces";
import { Pos } from "@interfaces";

import { astToTextCode, codeToAst } from "@utils";
import { printInfo } from "@/_common/helpers/wordsManager";

class AstImportService {
    editImport = async (textCode: TextCode, importName: string, newImportName?: string, newImportPath?: string): Promise<TextCode> => {

        const ast = codeToAst(textCode);
        let ok = false;

        traverse(ast, {

            ImportDeclaration: (path) => {
                const astImport = path.node as AstImportDeclaration;

                let importedGetting = astImport.specifiers[0].imported;
                let localGetting = astImport.specifiers[0].local;

                if (importedGetting && importedGetting.name === importName) {
                    if (newImportName) importedGetting.name = newImportName;
                    if (newImportPath) astImport.source.value = newImportPath;
                    ok = true;
                }

                if (localGetting && localGetting.name === importName) {
                    if (newImportName) localGetting.name = newImportName;
                    if (newImportPath) astImport.source.value = newImportPath;
                    ok = true;
        
                }
            },
        });

        !ok && throwError("not_found", `[AST] Import '${importName}'`);
        printInfo("AST", `Import '${importName}' edited successfully.`);
        return await astToTextCode(ast);
    };

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
            },
        });
        if (pos.end !== 0) return pos;
        else throwError("not_found", `[AST] Import '${importName}'`);
    };
}

export default AstImportService;
