import ServicesInjector from "@services_injector";
import { Path, } from '@interfaces/fs.interface';

import { removeCodeBetweenPos } from "../_utils/codeEdition";


class GeneratorFn extends ServicesInjector {


    renameFunctionProperty = async (filePath: Path, compilerName: string, propName: string, newPropName: string) => {

        const textCode = await this.S.fs.files.getFile(filePath);
        const newTextCode = this.S.ast.functions.editFunctionProperty(textCode, compilerName, propName, newPropName);

        await this.S.fs.files.createFile(filePath, newTextCode);
    }

    getLineFunctionProperty = async (filePath: Path, compilerName: string, controllerName: string) => {
        const textCode = await this.S.fs.files.getFile(filePath);

        const pos = this.S.ast.functions.getPosFunctionProperty(textCode, compilerName, controllerName);
        const index = textCode.substring(0, pos.start).split('\n').length;
        const right = compilerName.length + 2;

        return { index, right };

    }

    removeFunctionProperty = async (filePath: Path, compilerName: string, propName: string) => {
        let textCode = await this.S.fs.files.getFile(filePath);
        const pos = this.S.ast.functions.getPosFunctionProperty(textCode, compilerName, propName);
        textCode = removeCodeBetweenPos(textCode, pos);
        await this.S.fs.files.createFile(filePath, textCode);
    }


}


export default GeneratorFn;