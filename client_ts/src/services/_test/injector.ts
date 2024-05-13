import { AuthManager } from "@/_config/redux";
import { getObjState as state, setReducer } from "../../redux/hooks/useRedux";
import AuthApiService from "../auth/auth.api.service";
import { UserApiServices } from "../user/user.api.service";

export class Injector {
    // private readonly setAuth = setReducer("auth");
    // private readonly auth = (): AuthState => state.auth;

    // public authApi: AuthApiService;
    public auth: { api: AuthApiService };
    public user: { api: UserApiServices };
    constructor() {

        this.auth = {
            api: new AuthApiService(setReducer("auth"), () => state.auth, this)
        };


        this.user = {
            api: new UserApiServices(setReducer("user"), () => state.user, this)
        };
    }

    look = async () => {
        // console.log(await this.authApi.other())
    };
}

// export class AuthApiService extends AuthManager {

//     main = () => {
//         this.superService.super_other();
//     };

//     testReducer = async (name: string) => {
//         this.setAuth({ name }, "SET_AUTH");
//     };

//     other = async () => {
//         return this.auth().name;
//     };
// }




const injector = () => new Injector();

export default injector;
