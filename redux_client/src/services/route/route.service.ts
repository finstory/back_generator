import { S, BasicInject, BasicInjectable, Redux, ReduxConfig, PrintError, PrintErrRes, SetRedux } from "@decorators";

import RouteState from "./route.store";
import ModuleState from "@/modules/module/services/module.store";
import { BasicRoute, NewRoute, Route } from "../_interfaces/routes.interface";

import printAlert from "@/_common/plugins/toast-alerts";
import { confirmAlert } from "@/_common/helpers/alert";
import { IRoute } from "@/modules/module/_interfaces/module.interface";

@ReduxConfig
@PrintErrRes
class RouteService extends BasicInjectable {

    @Redux public routeState!: RouteState;

    @Redux private _routeState: RouteState;
    @Redux private _moduleState: ModuleState;
    @Redux private _setRoute: SetRedux;
    // @Redux private _setModule: SetRedux;1

    @BasicInject private _api: S["api"];
    @BasicInject private _module: S["module"];
    @BasicInject private _validation: S["validation"];


    toggleParamsSelector = (requestParamsType: string) => {
        const { routeManager } = this._routeState;
        this._setRoute({ routeManager: { ...routeManager, paramsSelected: requestParamsType } }, "TOGGLE_PARAMS_SELECTOR");
    }

    findRoute = (moduleName: string, routeId: string): IRoute => {
        const moduleGetting = this._moduleState.modulesList.find((module) => module.name === moduleName);
        if (!moduleGetting) throw new Error("Module not found");
        const routeGetting = moduleGetting?.routes.find((route) => route.id === routeId);
        if (!routeGetting) throw new Error("Route not found");

        return routeGetting;
    }

    @PrintError
    loadRouteManager = async (moduleName: string, routeId: string, controllerName: string) => {
        const { routeManager } = this._routeState;
        this._setRoute({ routeManager: { ...routeManager, moduleName, routeId } }, "LOAD_ROUTE_MANAGER");
        // console.log(moduleName, routeId)
        await this._validation.reloadRequestParams(moduleName, controllerName);
    }

    @PrintError
    addRoute = async (moduleName: string, route: BasicRoute) => {
        await this._api.endpoint.postEndpoint({ moduleName, route });
        await this._module.getAllModules();
        printAlert(`Route ${route.endpointName} added successfully`);
    }


    @PrintError
    editRoute = async (moduleName: string, route: Route, newRoute: NewRoute) => {
        await this._api.endpoint.patchEndpoint({ moduleName, route, newRoute });
        await this._module.getAllModules();
        printAlert(`Route ${route.endpointName} edited successfully`);
    }


    @PrintError
    deleteRoute = async (moduleName: string, route: Route) => {
        const confirm = await confirmAlert(`Are you sure you want to remove route ${route.endpointName}?`);
        if (!confirm) return;
        await this._api.endpoint.deleteEndpoint({ moduleName, route });
        await this._module.getAllModules();

        printAlert(`Route ${route.endpointName} removed successfully`);
    }


    toggleModuleEditor = () => {
        const { endpointPanel } = this._routeState;
        const { moduleEditorOpen } = endpointPanel;
        this._setRoute({ endpointPanel: { ...endpointPanel, moduleEditorOpen: !moduleEditorOpen } }, "TOGGLE_MODULE_EDITOR");
    };
}
export default RouteService;