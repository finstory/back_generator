import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { getObjState as state, setReducer, getState } from "@/_common/redux/hooks/useRedux";
import { useEffect } from "react";


interface Dispatch {
    set: (data: any, actionName: string) => void;
}

const stateR = {
    get auth() {
        return state.auth;
    }
};
class useAuthService extends BasicInjectable {
    private get _auth() {
        return state.auth;
    }

    private _setAuth = setReducer("auth");

    get auth() {
        return getState("auth");
    
    }


    readonly effect = () => {
        useEffect(() => {
            console.log("effect");
        }, []);
    }
    testAuth = () => {

        // this.effect();
        console.log("yes", this._auth.name);
        this._setAuth({ name: "hello" }, "testAuth");
        console.log("yes", this._auth.name);

        // this._product.listProduct();
        // this._product_otherP.test();
    }

    login(username: string, password: string) {
        // this._product.getProduct("heloo", "world");
        console.log(username);
        console.log(password);
    }
}
export default useAuthService;