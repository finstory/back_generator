import { printInfo, UpFirst } from "@helpers/wordsManager";
import { controller_model } from "@/_common/mockups/controller.mockup";
import { AllServices as S, Injectable, Inject } from "@services_injector";
import throwError from "@throw_error";
import { env } from "process";

const appPath = env.BACKEND_PATH;

class ControllerEntityService extends Injectable {

    @Inject private _fs_file: S['fs']['file'];
    @Inject private _ast_class: S['ast']['class'];
    @Inject private _generator_tag: S['generator']['tag'];




    createControllerEntity = async (moduleName: string, controllerName: string) => {

        const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;
        const textCode = controller_model(controllerName);

        await this._generator_tag.addCodeAfterTag(filePath, "<CONTROLLERS>", textCode);

        printInfo("CONTROLLER", `Controller entity ${controllerName} added successfully.`);
    }

    removeControllerEntity = async (moduleName: string, controllerName: string) => {

        const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {

            return await this._ast_class.removeProperty(textCode, { className: `${UpFirst(moduleName)}Controller`, name: controllerName, comment: "<CONTROLLERS>" })

        });

        printInfo("CONTROLLER", `Controller entity ${controllerName} removed successfully.`);
    }

    editControllerEntity = async (moduleName: string, controllerName: string, newControllerName: string) => {

        const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {

            textCode = textCode.replace(new RegExp(controllerName, "g"), newControllerName);

            return textCode;
        });

        printInfo("CONTROLLER", `Controller entity edited successfully.`);
    }
}

export default ControllerEntityService;