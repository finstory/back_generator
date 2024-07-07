
import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import type ModuleState from "./module.store";
import payloadToString from "@/_common/config/errors/utils/payload-to-string.util";
import toast from "react-hot-toast";

import "reflect-metadata";
import printAlert from "@/_common/plugins/toast-alerts";

function PrintError(target: any, propertyKey: string) {
    const existingPrintErrors = Reflect.getMetadata('printError', target) || [];
    Reflect.defineMetadata('printError', [...existingPrintErrors, propertyKey], target);
}


export function PrintErrRes<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            const printErrorMethods = Reflect.getMetadata('printError', this) || [];
            for (const method of printErrorMethods) {
                const originalMethod = this[method];
                this[method] = async (...args: any[]) => {
                    try {
                        await originalMethod.apply(this, args);
                    } catch (error) {
                        console.error(payloadToString(error));
                        printAlert(payloadToString(error), "error");
                    }
                }
            }
        }
    }
}


@ReduxConfig
@PrintErrRes
class ModuleService extends BasicInjectable {

    @Redux public moduleState: ModuleState;
    @Redux private _module: ModuleState;
    @Redux private _setModule: SetRedux;
    @BasicInject private _api: S["api"];

    @PrintError
    getAllModules = async () => {
        const modulesList = await this._api.module.getModule();
        this._setModule({ modulesList }, "GET_ALL_MODULES");
    }

    @PrintError
    addModule = async (moduleName: string) => {
        await this._api.module.postModule({ moduleName });
        await this.getAllModules();
        printAlert(`Module ${moduleName} added successfully`);
    }

    @PrintError
    renameModule = async (moduleName: string, newModuleName: string) => {
        printAlert(`Module ${moduleName} renamed to ${newModuleName} successfully`);
    }

    @PrintError
    removeModule = async (moduleName: string) => {
        await this._api.module.deleteModule({ moduleName });
        await this.getAllModules();
        printAlert(`Module ${moduleName} removed successfully`);
    }


}
export default ModuleService;