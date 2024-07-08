
import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { PrintError, PrintErrRes } from "@/_common/config/errors/decorators/print-errors";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import type RouteState from "./route.store";
import { Route, NewRoute } from "./interfaces/routes.interface";
import printAlert from "@/_common/plugins/toast-alerts";


@ReduxConfig
@PrintErrRes
class RouteService extends BasicInjectable {

    @Redux public routeState!: RouteState;
    @Redux private _routeState!: RouteState;
    @Redux private _setRoute!: SetRedux;
    @BasicInject private _api: S["api"];
    @BasicInject private _module: S["module"];

    @PrintError
    editRoute = async (moduleName: string, route: Route, newRoute: NewRoute) => {
        await this._api.endpoint.patchEndpoint({ moduleName, route, newRoute });
        await this._module.getAllModules();
        printAlert(`Route ${route.endpointName} edited successfully`);
    }

    toggleModuleEditor = () => {
        const { endpointPanel } = this._routeState;
        const { moduleEditorOpen } = endpointPanel;
        this._setRoute({ endpointPanel: { ...endpointPanel, moduleEditorOpen: !moduleEditorOpen } }, "TOGGLE_MODULE_EDITOR");
    };
}
export default RouteService;