import { AuthState } from "@/redux/stores/auth.store";
import { getObjState as state, setReducer } from "../../redux/hooks/useRedux";
import { UserState } from "@/redux/stores/user.store";
import { Injector } from "@/services/_test/injector";

export class AuthManager {

    protected setAuth: (data: any, actionName: string) => void;
    protected auth: () => AuthState;
    protected superService: Injector;

    constructor(setAuth: any, auth: () => AuthState, superService: Injector) {
        this.setAuth = setAuth;
        this.auth = auth;
        this.superService = superService;
    }

}

export class UserManager {
    protected setUser: (data: any, actionName: string) => void;
    protected user: () => UserState;
    private superService: Injector;

    constructor(setUser: any, user: () => UserState, superService: Injector) {
        this.setUser = setUser;
        this.user = user;
        this.superService = superService;
    }
}

