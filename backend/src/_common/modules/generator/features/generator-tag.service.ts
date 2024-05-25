import ServicesInjector from "@services_injector";
import { Path, TextCode } from '@interfaces/fs.interface';

import { insertCodeAfterPosition } from "../_utils/codeEdition";


class GeneratorTag extends ServicesInjector {

    addCodeAfterTag = async (filePath: Path, tagName: string, codeToAdd: TextCode, addSpace: boolean = false) => {

        let textCode = await this.S.fs.files.getFile(filePath);
        const pos = this.S.ast.comments.getPosComment(textCode, tagName);
        textCode = insertCodeAfterPosition(textCode, codeToAdd, pos, addSpace);

        await this.S.fs.files.createFile(filePath, textCode);

    }

}


export default GeneratorTag;