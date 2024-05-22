import ServicesInjector from "@services_injector";
import { Path, TextCode } from '@interfaces/fs.interface';

import { insertCodeAfterPosition, removeCodeBetweenPos } from "../_utils/codeEdition";



class GeneratorImport extends ServicesInjector {

    renameImport = async (filePath: Path, importName: string, newImportName: string, newPathName: string) => {
        let textCode = await this.S.fs.files.getFile(filePath);
        textCode = this.S.ast.imports.editImport(textCode, importName, newImportName, newPathName);
        await this.S.fs.files.createFile(filePath, textCode);
    };

    removeImport = async (filePath: Path, importName: string) => {
        let textCode = await this.S.fs.files.getFile(filePath);
        const pos = this.S.ast.imports.getPosImport(textCode, importName);

        textCode = removeCodeBetweenPos(textCode, pos, false);
        await this.S.fs.files.createFile(filePath, textCode);
    };

}


export default GeneratorImport;