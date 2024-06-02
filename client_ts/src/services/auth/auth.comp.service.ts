
import { AuthManager } from "@/_config/redux";

class AuthCompService extends AuthManager {

  setComponent = async (name: string) => {
   return coso;
    this.setAuth({ name }, "SET_COMPONENT");
  };

  other = async () => {
    console.log(this.auth.name)
  };
}

const authCompService = () => new AuthCompService();
export default authCompService;