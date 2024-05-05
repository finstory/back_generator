import { getObjState as state, setReducer } from "../../redux/hooks/useRedux";

export class AuthManager {
    protected readonly  setAuth = setReducer("auth");
    protected readonly auth = () => state.auth;
}

export class UserManager {
    protected readonly setUser = setReducer("user");
    protected readonly user = () => state.user;
}

