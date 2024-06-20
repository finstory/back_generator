
import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";
import type AuthState from "./auth.store";

@ReduxConfig
class AuthService extends BasicInjectable {

    @Redux public authState!: AuthState;
    @Redux private _auth!: AuthState;
    @Redux private _setAuth!: SetRedux;
    @BasicInject private _product!: S["product"];


    testAuth = () => {
        this._product.listProduct();

        // this.effect();
        // this._setAuth({ name: "hello" }, "testAuth");

        // this._product.listProduct();
        // this._product_otherP.test();
    }

    testProduct = () => {
        this._setAuth({ name: "products" }, "testAuth");
    };

    login(username: string, password: string) {
        // this._product.getProduct("heloo", "world");
        console.log(username);
        console.log(password);
    }
}
export default AuthService;