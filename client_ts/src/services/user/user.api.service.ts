import { UserManager } from "../../config/redux";

class UserApiServices extends UserManager {

  testReducer = async () => {
    const credential = this.user().credential;
    this.setUser({ credential: { ...credential, name: "sds" } }, "SET_CRENDENTIAL");
  };

  other = async () => {
    return this.user.name;
  };
}



const userApiServices = () => { new UserApiServices() };
export default userApiServices;
