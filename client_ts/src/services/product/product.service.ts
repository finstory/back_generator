import { Redux, ReduxConfig, type SetRedux } from "@/_common/config/redux/decorators/redux-config";
import { AllServices as S, Auto, AutoInstance, Inject, Injectable, BasicInjectable, BasicInject } from "@services_injector";

class OtherService {
    test() {
        console.log("test8989");
    }

}
@ReduxConfig
class ProductService extends BasicInjectable {

    @Redux private _setAuth!: SetRedux;
    @BasicInject private _auth!: S["auth"];


    // private _auth!: S["auth"];

    // _initial(S: S) {
    //     this._auth = S.auth;
    // };

    // injectionAuth = () => {
    //     this._auth.testAuth();
    // };

    listProduct() {

        this._setAuth({ name: "hello" }, "testProduct");
        this._auth.testProduct();
        console.log("listProduct222");
    }

    getProduct(username: string, password: string) {

        console.log(username);
        console.log(password);
    }
}
export default ProductService;