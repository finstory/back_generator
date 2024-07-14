import { S, BasicInject, BasicInjectable, Redux, ReduxConfig, PrintError, PrintErrRes, SetRedux } from "@decorators";

import RouteState from "./route.store";
import { NewRoute, Route } from "../_interfaces/routes.interface";

import printAlert from "@/_common/plugins/toast-alerts";
import { confirmAlert } from "@/_common/helpers/alert";

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
        confirmAlert("Are you sure you want to toggle the module editor?");
        const { endpointPanel } = this._routeState;
        const { moduleEditorOpen } = endpointPanel;
        this._setRoute({ endpointPanel: { ...endpointPanel, moduleEditorOpen: !moduleEditorOpen } }, "TOGGLE_MODULE_EDITOR");
    };
}
export default RouteService;