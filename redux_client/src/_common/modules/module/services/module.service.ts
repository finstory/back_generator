import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import type ModuleState from "./module.store";

import { PrintError, PrintErrRes } from "@print_errors";
import printAlert from "@/_common/_plugins/toast-alerts";
import { confirmAlert } from "@/_common/helpers/alert";

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
        const confirm = await confirmAlert(`Are you sure you want to remove module ${moduleName}?`);
        
        if (!confirm) return;

        await this._api.module.deleteModule({ moduleName });
        await this.getAllModules();

        printAlert(`Module ${moduleName} removed successfully`);
    }

}
export default ModuleService;