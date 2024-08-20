import { S, BasicInject, BasicInjectable, PrintError, PrintErrRes } from "@decorators";
import { useEffect } from "react";


@PrintErrRes
class UserService extends BasicInjectable {

    @BasicInject private _api: S["api"];
    @BasicInject private _state: S["state"];
    @BasicInject private _action_user: S["action"]["user"];
    @BasicInject private _action_route: S["action"]["route"];


    anotherMethod = async () => {
        this._action_user.changeName("Facu");
        this._action_user.increment(this._state.user.name);
    }

    someMethod = () => {

        const { children } = this._state.user;
        console.log("soy children", children.name);
        this._action_user.increment();
        this._action_user.changeChildrenName("facundo");
        console.log("soy children", this._state.user.children.name)

    };
}
export default UserService;