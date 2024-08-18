import { printInfo } from "@/_common/helpers/wordsManager";
import { TextPosition } from "@interfaces";
import { AllServices as S, Injectable, Inject } from "@services_injector";
import throwError from "@throw_error";
import { remove } from "lodash";
import { controller } from "@mockups";
import { env } from "process";

const appPath = env.BACKEND_PATH;

class ControllerFileService extends Injectable {

    @Inject private _fs_file: S['fs']['file'];
    @Inject private _ast_compilerFunction: S['ast']['compilerFunction'];
    @Inject private _generator_tag: S['generator']['tag'];
    @Inject private _ast_import: S['ast']['import'];

    updateControllerImport = async (moduleName: string, newModuleName: string, features?: string[]) => {


        const endpointPath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;
        await this._fs_file.updateFile(endpointPath, async (textCode) => {
            console.log(await this._ast_import.editImport(textCode, "controller", "controller", `./_entities/${newModuleName}-controller.entity`))
            return await this._ast_import.editImport(textCode, "controller", "controller", `./_entities/${newModuleName}-controller.entity`);
        });

        printInfo("ROUTE", `Updated import for controller to '${moduleName}' module.`);
    };

    createController = async (moduleName: string, controllerName: string) => {

        const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;
        const textCode = controller(controllerName);

        await this._generator_tag.addCodeAfterTag(filePath, "<CONTROLLERS>", textCode);

        printInfo("CONTROLLER", `Controller added successfully.`);



    };

    renameController = async (moduleName: string, controllerName: string, newControllerName: string) => {

        const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {

            return await this._ast_compilerFunction.renameProperty(textCode, { compilerName: "controller", propName: controllerName }, newControllerName);
        });

        printInfo("CONTROLLER", `Renaming '${controllerName}' controller.`);

    }

    removeController = async (moduleName: string, controllerName: string) => {

        const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {

            return await this._ast_compilerFunction.removeProperty(textCode, { compilerName: "controller", propName: controllerName });
        });

        printInfo("CONTROLLER", `Controller removed successfully.`);

    }

    getPositionController = async (moduleName: string, controllerName: string): Promise<TextPosition> => {

        const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;
        const textCode = await this._fs_file.getFile(filePath);


        const pos = this._ast_compilerFunction.getPosProperty(textCode, { compilerName: "controller", propName: controllerName });

        printInfo("CONTROLLER", `Position obtained for controller: '${controllerName}' successfully.`);

        return pos;
    }
}



export default ControllerFileService;