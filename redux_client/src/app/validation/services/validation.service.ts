import { S, BasicInject, BasicInjectable, PrintError, PrintErrRes } from "@decorators";
import printAlert from "@/_common/_plugins/toast-alerts";
import { confirmAlert } from "@/_common/helpers/alert";

@PrintErrRes
class ValidationService extends BasicInjectable {

    @BasicInject private _module: S["module"];

    @BasicInject private _api: S["api"];
    @BasicInject private _state: S["state"];
    @BasicInject private _action_module: S["action"]["module"];

    @PrintError
    reloadRequestParams = async (moduleName: string, controllerName: string) => {

        await this._api.requestParams.patchValidationReload({ moduleName, controllerName });
        await this._module.fetchAllModules();

    }
}

export default ValidationService;