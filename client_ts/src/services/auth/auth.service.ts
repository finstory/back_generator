
import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { Redux, ReduxConfig, type SetRedux } from "@redux_config";

import type { AuthState } from "@/_common/redux/stores/auth.store";
import type { UserState } from "@/old_services/other/_other.store";


@ReduxConfig
class AuthService extends BasicInjectable {

    @Redux public authState!: AuthState;
    @Redux private _auth!: AuthState;
    @Redux private _setAuth!: SetRedux;
    @Redux private _user!: UserState;

    testAuth = () => {
        // this.effect();
        console.log(this._user.is_login);
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
export default AuthService;