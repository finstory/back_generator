import { UserManager } from "@/_config/redux";
export class UserApiServices extends UserManager {


  otherUser = async () => {
    this.setUser({ name: "Other User" }, "SET_USER");
  }

  userRedux = async (name: string) => {
    console.log(name)
  }
}
export default UserApiServices;
