import { hyphenToClassName, printInfo, UpFirst, upperCaseToHyphen } from "@helpers/wordsManager";
import { controller_model } from "@/_common/mockups/controller.mockup";
import { AllServices as S, Injectable, Inject } from "@services_injector";
import throwError from "@throw_error";
import { export_validation, validation_model } from "@/_common/mockups/validation.mockup";
import { env } from "process";
import { ValidatorOptionDto } from "../_dtos/validation-fn.dto";
import { BasicRequestParamsDto, RequestParamsDto } from "@/app/endpoint/_dtos/request-params.dto";
import { omit } from "lodash";
import { PropertyDecoratorDto } from "@/_common/modules/ast/_dtos/ast-class.dto";

const appPath = env.BACKEND_PATH;

class ValidationRequestParamsService extends Injectable {

    @Inject private _fs_file: S['fs']['file'];
    @Inject private _ast_classDecorator: S['ast']['classDecorator'];
    @Inject private _ast_class: S['ast']['class'];
    // addBarrelExport = async (moduleName: string, controllerName: string) => {

    //     const filePath = `${appPath}/${moduleName}/_validations/_index.ts`;
    //     const textCode = export_validation(controllerName);

    //     await this._generator_tag.addCodeAfterTag(filePath, "<EXPORTS>", textCode);

    //     printInfo("VALIDATION", `Validation model export added successfully.`);
    // }

    // readAllProperties = async (moduleName: string, controllerName: string, from: string) => {

    //     const hyphenControllerName = upperCaseToHyphen(controllerName);
    //     const filePath = `${appPath}/${moduleName}/_validations/${hyphenControllerName}.validate.ts`;

    //     const properties = await this._ast_class.getProperties(filePath, className);
    //     return properties;
    // }

    addProperty = async (
        moduleName: string,
        controllerName: string,
        { from, name, type }: BasicRequestParamsDto
    ) => {
        const hyphenControllerName = upperCaseToHyphen(controllerName);
        const className = hyphenToClassName(from);
        const filePath = `${appPath}/${moduleName}/_validations/${hyphenControllerName}.validate.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {
            textCode = await this._ast_class.addProperty(textCode,
                { className, name, type }
            );
            return textCode;
        });
        printInfo("VALIDATION", `Validation model added to '${UpFirst(from)}' : '${name}' in ${controllerName}.validate.ts  successfully.`);
    }


    addValidation = async (
        moduleName: string,
        controllerName: string,
        { from, name, type }: BasicRequestParamsDto,
        { decoratorName, decoratorType, decoratorArguments }: PropertyDecoratorDto
    ) => {
        const hyphenControllerName = upperCaseToHyphen(controllerName);
        const className = hyphenToClassName(from);
        const filePath = `${appPath}/${moduleName}/_validations/${hyphenControllerName}.validate.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {
            textCode = await this._ast_classDecorator.addDecoratorToProperty(textCode,
                { className, name, type },
                { decoratorName, decoratorType, decoratorArguments }
            );
            return textCode;
        });
        printInfo("VALIDATION", `Validation model added to '${UpFirst(from)}' : '${name}' in ${controllerName}.validate.ts  successfully.`);
    }

}

export default ValidationRequestParamsService;