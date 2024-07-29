import { hyphenToClassName, printInfo, underscoreToClassName, underscoreToUpperCase, UpFirst, upperCaseToHyphen } from "@helpers/wordsManager";
import { controller_model } from "@/_common/mockups/controller.mockup";
import { AllServices as S, Injectable, Inject } from "@services_injector";
import throwError from "@throw_error";
import { export_validation, validation_model } from "@/_common/mockups/validation.mockup";
import { env } from "process";
import { ValidatorOptionDto } from "../_dtos/validation-fn.dto";
import { BasicRequestParamsDto, RequestParamsDto } from "@/app/endpoint/_dtos/request-params.dto";
import { omit } from "lodash";
import { PropertyDecoratorDto } from "@/_common/modules/ast/_dtos/ast-class.dto";
import promise from "@/_common/helpers/promiseWrapper";

const appPath = env.BACKEND_PATH;

class ValidationRequestParamsService extends Injectable {

    @Inject private _fs_file: S['fs']['file'];
    @Inject private _ast_classDecorator: S['ast']['classDecorator'];
    @Inject private _ast_class: S['ast']['class'];

    getAllProperties = async (
        moduleName: string, controllerName: string, from: RequestParamsDto["from"]
    ): Promise<RequestParamsDto[]> => {

        const result: RequestParamsDto[] = [];
        const className = underscoreToClassName(from);
        const hyphenControllerName = upperCaseToHyphen(controllerName);
        const filePath = `${appPath}/${moduleName}/_validations/${hyphenControllerName}.validate.ts`;
        const textCode = await this._fs_file.getFile(filePath);
        const requestParamsList = await this._ast_class.getAllProperties(textCode, className);

        await promise<void>(async (resolve, reject) => {
            for (let prop of requestParamsList) {
                result.push({
                    from,
                    name: prop.name,
                    type: prop.typeStringified,
                    optional: prop.optional,
                    validations: await this._ast_classDecorator.getDecoratorByProperty(textCode, { className, name: prop.name })
                } as RequestParamsDto);
            } resolve();
        })
        return result;
    }

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
                { className, name, typeStringified: type }
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
                { className, name, typeStringified: type },
                { decoratorName, decoratorType, decoratorArguments }
            );
            return textCode;
        });
        printInfo("VALIDATION", `Validation model added to '${UpFirst(from)}' : '${name}' in ${controllerName}.validate.ts  successfully.`);
    }

}

export default ValidationRequestParamsService;