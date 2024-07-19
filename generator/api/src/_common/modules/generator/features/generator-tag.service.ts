import { AllServices as S, Inject, Injectable, Injector } from "@services_injector";
import { Path, TextCode } from '@interfaces';
import { Tags } from "@interfaces";

import { insertCodeAfterPosition } from "../_utils/code-edition.util";
import { formatCode } from "@ast/_utils/transform.util";
import { printInfo } from "@/_common/helpers/wordsManager";



class GeneratorTagService extends Injectable {

    @Inject private _fs_file: S['fs']['file'];
    @Inject private _ast_comment: S['ast']['comment'];

    addCodeAfterTag = async (filePath: Path, tagName: Tags, codeToAdd: TextCode, addSpace: boolean = false) => {

        let textCode = await this._fs_file.getFile(filePath);
        const pos = this._ast_comment.getPosComment(textCode, tagName);
        
        textCode = insertCodeAfterPosition(textCode, codeToAdd, pos, addSpace);

        await this._fs_file.createFile(filePath, await formatCode(textCode));

        printInfo("GENERATOR", `Code added after tag '${tagName}'.`);

    }

}


export default GeneratorTagService;