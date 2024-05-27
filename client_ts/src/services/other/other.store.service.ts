import { AuthManager } from "../../config/redux";

class AuthCompService extends AuthManager {

  setComponent = async (name: string) => {
    this.setAuth({ name }, "SET_COMPONENT");
  };

  other = async () => {
    return this.auth.name;
  };
}

const authCompService = () => new AuthCompService();
export default authCompService;
