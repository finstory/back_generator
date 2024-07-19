import { AllServices as S, Injector } from "@services_injector";
import { Path, } from '@interfaces';

import { removeCodeBetweenPos } from "../_utils/code-edition.util";


class GeneratorFn extends Injector {

    // private _fs_file: S["fs"]["file"];
    // private _ast_function: S["ast"]["function"];

    // renameFunctionProperty = async (filePath: Path, compilerName: string, propName: string, newPropName: string) => {

    //     const textCode = await this._fs_file.getFile(filePath);
    //     const newTextCode = await this._ast_function.editFunctionProperty(textCode, compilerName, propName, newPropName);

    //     await this._fs_file.createFile(filePath, newTextCode);
    // }

    // getLineFunctionProperty = async (filePath: Path, compilerName: string, controllerName: string) => {
    //     const textCode = await this._fs_file.getFile(filePath);

    //     const pos = this._ast_function.getPosFunctionProperty(textCode, compilerName, controllerName);
    //     const index = textCode.substring(0, pos.start).split('\n').length;
    //     const right = compilerName.length + 2;

    //     return { index, right };

    // }

    // removeFunctionProperty = async (filePath: Path, compilerName: string, propName: string) => {
    //     let textCode = await this._fs_file.getFile(filePath);
    //     const pos = this._ast_function.getPosFunctionProperty(textCode, compilerName, propName);
    //     textCode = removeCodeBetweenPos(textCode, pos);
    //     await this._fs_file.createFile(filePath, textCode);
    // }


}


export default GeneratorFn;