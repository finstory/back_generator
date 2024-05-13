import { AuthManager } from "@/_config/redux";

class AuthApiService extends AuthManager {

  nose = () => {
    this.superService.user.api.userRedux("funkca");
    this.setAuth({ name: "algito" }, "SET_OTRO");
  }

  main = () => {
    console.log("dsafasdf");
    this.superService.user.api.otherUser();
    // this.superService.super_other();
  };

  testReducer = async (name: string) => {
    this.setAuth({ name }, "SET_AUTH");
  };

  other = async () => {
    return this.auth().name;
  };
}



export default AuthApiService;
