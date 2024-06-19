
import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import type { AuthState } from "@/_common/redux/stores/auth.store";
import { useEffect, useState } from "react";

const useHook = () => {
    const [state, setState] = useState(0);
    useEffect(() => {
        console.log("useState used: ", state);
    }, [state]);
    return { state, setState };
}
@ReduxConfig
class AuthService extends BasicInjectable {

    @Redux public authState!: AuthState;
    @Redux private _auth!: AuthState;
    @Redux private _setAuth!: SetRedux;

    testAuth = () => {
        // this.effect();
        this._setAuth({ name: "hello" }, "testAuth");

        // this._product.listProduct();
        // this._product_otherP.test();
    }

    login(username: string, password: string) {
        // this._product.getProduct("heloo", "world");
        console.log(username);
        console.log(password);
    }
}
export default AuthService;