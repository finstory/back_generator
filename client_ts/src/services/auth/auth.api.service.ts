import { AuthManager } from "../../config/redux";

class AuthApiService extends AuthManager {

  testReducer = async (name: string) => {

    this.setAuth({ name }, "SET_AUTH");

  };

  other = async () => {
    return this.auth.name;
  };
}

const authApiServices = () => new AuthApiService();
export default authApiServices;
