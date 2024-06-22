
import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import type RouteState from "./route.store";


@ReduxConfig
class RouteService extends BasicInjectable {

    @Redux public routeState!: RouteState;
    @Redux private _route!: RouteState;
    @Redux private _setRoute!: SetRedux;

    toggleModuleEditor = () => {
        const { endpointPanel: { moduleEditorOpen } } = this._route;
        this._setRoute({ endpointPanel: { moduleEditorOpen: !moduleEditorOpen } }, "TOGGLE_MODULE_EDITOR");
    };

    login(username: string, password: string) {
        // this._product.getProduct("heloo", "world");
        console.log(username);
        console.log(password);
    }
}
export default RouteService;