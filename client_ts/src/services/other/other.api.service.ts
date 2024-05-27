import { get } from "env-var";
import { AuthManager } from "../../../config/redux/";
const db = {
  User: {} as object
};
const serivbce = {
}
class AuthApiService extends AuthManager {

  getAllUsers = async () => {
  
  };

  testReducer = async (name: string) => {
    this.setAuth({ name }, "SET_AUTH");
  };

  other = async () => {
    return this.auth.name;
  };
}

const authApiServices = () => new AuthApiService();




export default authApiServices;
