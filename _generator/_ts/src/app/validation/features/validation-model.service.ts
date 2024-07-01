import { printInfo, UpFirst } from "@helpers/wordsManager";
import { controller_model } from "@/_common/mockups/controller.mockup";
import { AllServices as S, Injectable, Inject } from "@services_injector";
import throwError from "@throw_error";
import { export_validation, validation_model } from "@/_common/mockups/validation.mockup";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";

const convertToSnakeCase = (text: string): string => {

    return text.replace(/([A-Z])/g, "-$1").toLowerCase();
}

class ValidateModelService extends Injectable {

    @Inject private _fs_file: S['fs']['file'];
    // @Inject private _ast_class: S['ast']['class'];
    @Inject private _generator_tag: S['generator']['tag'];

    addBarrelExport = async (moduleName: string, controllerName: string) => {

        const filePath = `${appPath}/${moduleName}/_validations/_index.ts`;
        const textCode = export_validation(controllerName);

        await this._generator_tag.addCodeAfterTag(filePath, "<EXPORTS>", textCode);

        printInfo("VALIDATION", `Validation model export '${convertToSnakeCase(controllerName)}' added successfully.`);
    }

    removeBarrelExport = async (moduleName: string, controllerName: string) => {

        const filePath = `${appPath}/${moduleName}/_validations/_index.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {
            const textCodeLines = textCode.split("\n");
            const newCode = textCodeLines.find(line => line.includes(`${convertToSnakeCase(controllerName)}.validate"`));

            !newCode && throwError("VALIDATION", "not_found", `model export '${convertToSnakeCase(controllerName)}'`);

            return textCodeLines.filter(line => line !== newCode).join("\n");
        });

        printInfo("VALIDATION", `Validation model export '${convertToSnakeCase(controllerName)}' removed successfully.`);
    }

    renameBarrelExport = async (moduleName: string, controllerName: string, newControllerName: string) => {
        await this.removeBarrelExport(moduleName, controllerName);
        await this.addBarrelExport(moduleName, newControllerName);
    }

    createFile = async (moduleName: string, controllerName: string) => {

        const filePath = `${appPath}/${moduleName}/_validations/${convertToSnakeCase(controllerName)}.validate.ts`;
        const textCode = validation_model();

        await this._fs_file.createFile(filePath, textCode);

        printInfo("VALIDATION", `Controller entity '${convertToSnakeCase(controllerName)}' added successfully.`);
    };

    renameFile = async (moduleName: string, controllerName: string, newControllerName: string) => {

        const filePath = `${appPath}/${moduleName}/_validations/${convertToSnakeCase(controllerName)}.validate.ts`;

        await this._fs_file.renameFile(filePath, `${convertToSnakeCase(newControllerName)}.validate.ts`);

        printInfo("VALIDATION", `Controller entity '${convertToSnakeCase(controllerName)}' edited successfully.`);
    }

    removeFile = async (moduleName: string, controllerName: string) => {

        const filePath = `${appPath}/${moduleName}/_validations/${convertToSnakeCase(controllerName)}.validate.ts`;

        await this._fs_file.deleteFile(filePath);

        printInfo("VALIDATION", `Controller entity '${convertToSnakeCase(controllerName)}' removed successfully.`);
    }



    // createControllerEntity = async (moduleName: string, controllerName: string) => {

    //     const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;
    //     const textCode = controller_model(controllerName);

    //     await this._generator_tag.addCodeAfterTag(filePath, "<CONTROLLERS>", textCode);

    //     printInfo("CONTROLLER", `Controller entity ${controllerName} added successfully.`);
    // }

    // removeControllerEntity = async (moduleName: string, controllerName: string) => {

    //     const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;

    //     await this._fs_file.updateFile(filePath, async (textCode) => {

    //         return await this._ast_class.removeProperty(textCode, { className: `${UpFirst(moduleName)}Controller`, propName: controllerName, comment: "<CONTROLLERS>" })

    //     });

    //     printInfo("CONTROLLER", `Controller entity ${controllerName} removed successfully.`);
    // }

    // editControllerEntity = async (moduleName: string, controllerName: string, newControllerName: string) => {

    //     const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;

    //     await this._fs_file.updateFile(filePath, async (textCode) => {

    //         textCode = textCode.replace(new RegExp(controllerName, "g"), newControllerName);

    //         return textCode;
    //     });

    //     printInfo("CONTROLLER", `Controller entity edited successfully.`);
    // }
}

export default ValidateModelService;