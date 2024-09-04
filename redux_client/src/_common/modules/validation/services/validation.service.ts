import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import { PrintError, PrintErrRes } from "@print_errors";
import printAlert from "@/_common/_plugins/toast-alerts";
import { confirmAlert } from "@/_common/helpers/alert";
import ModuleState from "@/modules/module/services/module.store";
import RouteState from "@/app/route/services/route.store";

@ReduxConfig
@PrintErrRes
class ValidationService extends BasicInjectable {

    // @Redux public moduleState: ModuleState;
    @Redux private _routeState: RouteState;
    @Redux private _setRoute: SetRedux;
    @BasicInject private _api: S["api"];
    @BasicInject private _module: S["module"];

    @PrintError
    reloadRequestParams = async (
        moduleName: string,
        controllerName: string
    ) => {
        const { routeManager } = this._routeState;

        // this._setRoute({ routeManager: { ...routeManager, status: "loading" } }, "RELOAD_REQUEST_PARAMS");
        console.log(moduleName, controllerName)
        await this._api.requestParams.patchValidationReload({ moduleName, controllerName });
        await this._module.getAllModules();

        // this._setRoute({ routeManager: { ...routeManager, status: "ok" } }, "RELOAD_REQUEST_PARAMS");
    }

}
export default ValidationService;