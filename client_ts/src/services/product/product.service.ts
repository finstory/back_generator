import { AllServices as S, Auto, AutoInstance, Inject, Injectable } from "@services_injector";

class OtherService {
    test() {
        console.log("test8989");
    }

}

class ProductService {

    protected readonly product: any;

    // private _auth!: S["auth"];

    // _initial(S: S) {
    //     this._auth = S.auth;
    // };

    // injectionAuth = () => {
    //     this._auth.testAuth();
    // };

    listProduct() {
        console.log("listProduct222");
    }

    getProduct(username: string, password: string) {

        console.log(username);
        console.log(password);
    }
}
export default ProductService;