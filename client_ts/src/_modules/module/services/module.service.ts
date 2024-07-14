import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import type ModuleState from "./module.store";

import { PrintError, PrintErrRes } from "@print_errors";
import printAlert from "@/_common/plugins/toast-alerts";

@ReduxConfig
@PrintErrRes
class ModuleService extends BasicInjectable {

    @Redux public moduleState: ModuleState;
    @Redux private _moduleState: ModuleState;
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