
import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import type RouteState from "./route.store";


@ReduxConfig
class RouteService extends BasicInjectable {

    @Redux public routeState!: RouteState;
    @Redux private _route!: RouteState;
    @Redux private _setRoute!: SetRedux;

    toggleModuleEditor = () => {
        const { endpointPanel } = this._route;
        const { moduleEditorOpen } = endpointPanel;
        this._setRoute({ endpointPanel: { ...endpointPanel, moduleEditorOpen: !moduleEditorOpen } }, "TOGGLE_MODULE_EDITOR");
    };
}
export default RouteService;