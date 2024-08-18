import { S, BasicInject, BasicInjectable, PrintError, PrintErrRes } from "@decorators";
import { useEffect } from "react";
import { enviarDatos, getObs } from "./rx";

@PrintErrRes
class UserService extends BasicInjectable {

    @BasicInject private _state: S["state"];
    @BasicInject private _action_user: S["action"]["user"];


    change = () => {
        enviarDatos({ name: "hola", value: 4 });
    }

    view = () => {
        console.log(getObs())
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