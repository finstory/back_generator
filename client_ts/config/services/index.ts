import { getState } from "../../redux/hooks/useRedux";
import authApiServices from "../../services/auth/auth.api.service";
import authCompService from "../../services/auth/auth.comp.service";


const S = {
  auth: {
    get store() {
      return getState("auth");
    },
    get api() {
      return authApiServices();
    },
    get comp() {
      return authCompService();
    }
  },
};

export default S;
