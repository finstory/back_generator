import { UserManager } from "@/_common/config/redux";
class UserApiServices extends UserManager {

  otherUser = async () => {
    this.setUser({ name: "Other User" }, "SET_USER");
  }

  userRedux = async (name: string) => {
    console.log(name)
  }

  getAuth = async () => {

    console.log(await this.S.auth.api.other())
  }
}

export default UserApiServices;
