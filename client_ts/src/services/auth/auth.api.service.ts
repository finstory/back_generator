import { AuthManager } from "@/_config/redux";

class AuthApiService extends AuthManager {
  nose = () => {
    this.S.user.api.userRedux("funkca");

    this.setAuth({ name: "algito" }, "SET_OTRO");
  }

  main = () => {
    console.log("dsafasdf");
    this.S.user.api.otherUser();
    // this.S.super_other();
  };

  testReducer = async (name: string) => {
    this.setAuth({ name }, "SET_AUTH");
  };

  other = async () => {
    return this.auth().name;
  };
}



export default AuthApiService;
