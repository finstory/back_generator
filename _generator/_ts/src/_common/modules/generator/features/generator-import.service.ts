import { AllServices as S, Injector } from "@services_injector";
import { Path, TextCode } from "@interfaces";

import { insertCodeAfterPosition, removeCodeBetweenPos } from "../_utils/code-edition.util";

class GeneratorImport extends Injector {

    private _fs_file: S["fs"]["file"];
    private _ast_import: S["ast"]["import"];

    renameImport = async (filePath: Path, importName: string, newImportName: string, newPathName: string) => {
        let textCode = await this._fs_file.getFile(filePath);
        textCode = await this._ast_import.editImport(textCode, importName, newImportName, newPathName);
        await this._fs_file.createFile(filePath, textCode);
    };

    removeImport = async (filePath: Path, importName: string) => {
        let textCode = await this._fs_file.getFile(filePath);
        const pos = this._ast_import.getPosImport(textCode, importName);

        textCode = removeCodeBetweenPos(textCode, pos, false);
        await this._fs_file.createFile(filePath, textCode);
    };
}

export default GeneratorImport;
