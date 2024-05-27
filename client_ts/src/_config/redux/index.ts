import { AuthState } from "@/redux/stores/auth.store";
import { UserState } from "@/redux/stores/user.store";
import { Injector } from "@/services/_test/injector";

export class AuthManager {

    protected readonly setAuth: (data: any, actionName: string) => void;
    protected readonly auth: () => AuthState;
    protected readonly S: Injector;

    constructor(setAuth, auth, S) {
        this.setAuth = setAuth;
        this.auth = auth;
        this.S = S;
    }

}

export class UserManager {
    protected readonly setUser: (data: any, actionName: string) => void;
    protected readonly user: () => UserState;
    protected readonly S: Injector;

    constructor(setUser, user, S) {
        this.setUser = setUser;
        this.user = user;
        this.S = S;
    }
}

