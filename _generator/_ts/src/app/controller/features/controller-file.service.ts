import { printInfo } from "@/_common/helpers/wordsManager";
import { AllServices as S, Injector } from "@services_injector";
import throwError from "@throw_error";
import { remove } from "lodash";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";


class ControllerFileService extends Injector {

    private _fs_file: S['fs']['file'];
    private _ast_compiler_function: S['ast']['compiler_function'];

    renameController = async (moduleName: string, controllerName: string, newControllerName: string) => {

        const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {

            return await this._ast_compiler_function.renameProperty(textCode, { compilerName: "controller", propName: controllerName }, newControllerName);
        });

        printInfo("CONTROLLER", `Controller renamed to '${controllerName}'.`);

    }

    removeController = async (moduleName: string, controllerName: string) => {

        const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {

            return await this._ast_compiler_function.removeProperty(textCode, { compilerName: "controller", propName: controllerName });
        });

        printInfo("CONTROLLER", `Controller removed successfully.`);

    }
}



export default ControllerFileService;