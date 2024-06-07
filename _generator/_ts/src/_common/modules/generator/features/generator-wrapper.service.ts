import { AllServices as S, Injector } from "@services_injector";
import { Path, TextCode } from '@interfaces';
import { Tags } from "@interfaces";

import { insertCodeAfterPosition } from "../_utils/code-edition.util";
import { printInfo } from "@/_common/helpers/wordsManager";


class GeneratorWrapperService extends Injector {

    private _fs_file: S['fs']['file'];

    updateFile = async (filePath: Path, callback: (textCode: TextCode) => Promise<TextCode>, successMessage: string) => {

        let textCode = await this._fs_file.getFile(filePath);

        const newTextCode = await callback(textCode);

        await this._fs_file.createFile(filePath, newTextCode);
        printInfo("ROUTER", successMessage);
    }

}


export default GeneratorWrapperService;