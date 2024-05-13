import { getObjState as state, setReducer, getState } from "../../redux/hooks/useRedux";
import AuthApiService from "../auth/auth.api.service";
import UserApiServices from "../user/user.api.service";

export class Injector {

    public readonly auth: { api: AuthApiService };
    public readonly user: { api: UserApiServices };
    constructor() {

        this.auth = {
            api: new AuthApiService(setReducer("auth"), () => state.auth, this)
        };

        this.user = {
            api: new UserApiServices(setReducer("user"), () => state.user, this)
        };
    }

}

const AllServices = () => new Injector();

const S = {
    auth: {
        get api() {
            return AllServices().auth.api;
        },
        get store() {
            return getState("auth");
        },
        get comp() {
            return "authCompService();"
        }
    },
    user: {
        get api() {
            return AllServices().user.api;
        }
    }
};

export default S;
