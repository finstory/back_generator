
import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import type ModuleState from "./module.store";

@ReduxConfig
class ModuleService extends BasicInjectable {

    @Redux public moduleState!: ModuleState;
    @Redux private _module!: ModuleState;
    @Redux private _setModule!: SetRedux;

    testAuth = () => {

        // this.effect();
        // this._setAuth({ name: "hello" }, "testAuth");

        // this._product.listProduct();
        // this._product_otherP.test();
    }

}
export default ModuleService;