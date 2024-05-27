import { getState } from "@/redux/hooks/useRedux";

import authCompService from "@/services/auth/auth.comp.service";
import authApiServices from "@/services/other/other.api.service";
import userApiServices from "@/services/user/user.api.service";



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
  user: {

  }
};

export default S;
