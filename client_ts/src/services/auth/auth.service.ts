import 'reflect-metadata';
import { BasicInject, BasicInjectable, AllServices as S } from "@services_injector";
import { getObjState as state, setReducer, getState } from "@/_common/redux/hooks/useRedux";
import { useEffect } from "react";
import type { AuthState } from "@/_common/redux/stores/auth.store";
import type { UserState } from '@/_common/redux/stores/user.store';

function Redux(target: any, propertyKey: string) {
    const reduxProperties = Reflect.getMetadata('reduxProperties', target) || [];
    Reflect.defineMetadata('reduxProperties', [...reduxProperties, propertyKey], target);
}


function ReduxConfig<T extends { new(...args: any[]): {} }>(constructor: T) {

    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);

            const reduxProperties = Reflect.getMetadata('reduxProperties', this) || [];

            for (const propGetting of reduxProperties) {
                const prop = propGetting.startsWith('_') ? propGetting.slice(1) : propGetting;

                if (prop.endsWith("State")) {
                    const stateName = prop.replace("State", "");

                    Object.defineProperty(this, `_${stateName}State`, {
                        get: function () {
                            return getState(stateName);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    continue;
                }

                if (prop.startsWith("set")) {
                    if (!propGetting.startsWith("_")) throw new Error("set method must be private, please add '_' before the method name.");

                    const reducerName = prop.replace("set", "");

                    Object.defineProperty(this, "_" + prop, {
                        value: setReducer(reducerName.toLowerCase()),
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });

                    continue;
                }
                else {
                    if (!propGetting.startsWith("_")) throw new Error("set method must be private, please add '_' before the method name.");

                    Object.defineProperty(this, "_" + prop, {
                        get: function () {
                            return state[prop];
                        },
                        enumerable: false,
                        configurable: true
                    });

                    continue;
                }

            }

        }
    }
}

type SetRedux = (data: any, actionName: string) => void;

@ReduxConfig
class AuthService extends BasicInjectable {

    @Redux public authState!: AuthState;
    @Redux private _auth!: AuthState;
    @Redux private _setAuth!: SetRedux;


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
export default AuthService;