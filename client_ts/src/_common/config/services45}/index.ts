import { getState } from "@/redux/hooks/useRedux";

import authCompService from "@/_common/services/auth/auth.comp.service";
import authApiServices from "@/_common/services/other/other.api.service";
import userApiServices from "@/_common/services/user/user.api.service";



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
