import { S, BasicInject, BasicInjectable, PrintErrRes } from "@decorators";
import printAlert from "@/_common/_plugins/toast-alerts";
import { confirmAlert } from "@/_common/helpers/alert";
import { useRouteRx } from "@/app/route/rxjs/route.rx";

@PrintErrRes
class UserService extends BasicInjectable {

    @BasicInject private _api: S["api"];
    @BasicInject private _action: S["action"];
    @BasicInject private _state: S["state"];

    otherMethod = () => {
        try {
            const { routeRx } = useRouteRx();
       
            console.log(this._state.user.name);

            this._action.user.increment
            console.log(this._state.user.name);
        } catch (err) {
            printAlert(err);
        }
    }

}

export default UserService;