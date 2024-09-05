import { S, BasicInject, BasicInjectable, PrintError, PrintErrRes } from "@decorators";
import { BasicRoute, NewRoute, Route } from "../_interfaces/routes.interface";
import printAlert from "@/_common/_plugins/toast-alerts";
import { confirmAlert } from "@helpers/alert";


@PrintErrRes
class RouteService extends BasicInjectable {

    @BasicInject private _module: S["module"];
    @BasicInject private _validation: S["validation"];

    @BasicInject private _api: S["api"];
    @BasicInject private _state: S["state"];
    @BasicInject private _action_route: S["action"]["route"];


    @PrintError
    addRoute = async (moduleName: string, route: BasicRoute) => {
        await this._api.endpoint.postEndpoint({ moduleName, route });
        await this._module.fetchAllModules();
        printAlert(`Route ${route.endpointName} added successfully`);
    }

    @PrintError
    editRoute = async (moduleName: string, route: Route, newRoute: NewRoute) => {
        await this._api.endpoint.patchEndpoint({ moduleName, route, newRoute });
        await this._module.fetchAllModules();
        printAlert(`Route ${route.endpointName} edited successfully`);
    }

    @PrintError
    deleteRoute = async (moduleName: string, route: Route) => {
        const confirm = await confirmAlert(`Are you sure you want to remove route ${route.endpointName}?`);
        if (!confirm) return;

        await this._api.endpoint.deleteEndpoint({ moduleName, route });
        await this._module.fetchAllModules();


        printAlert(`Route ${route.endpointName} removed successfully`);
    }

    //* Proxy Action:

    selectRouteManager = async (moduleName: string, routeId: string, controllerName: string) => {
        this._action_route.setRouteManager({ moduleName, routeId });
        await this._validation.reloadRequestParams(moduleName, controllerName);
    };

    // toggleParamsSelected = (requestParamsType: "params" | "query" | "body" | "bodyResponse") => { this._action_route.toggleParamsSelected(requestParamsType) };


    // someMethod = () => {

    //     const { children } = this._state.user;
    //     console.log("soy children", children.name);
    //     this._action_user.increment();
    //     this._action_user.changeChildrenName("facundo");
    //     console.log("soy children", this._state.user.children.name)

    // };
}

export default RouteService;