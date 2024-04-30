//$ GENERATE IMPORT REDUCERS
import { authReducer } from "../../services/useAuthServices";
//$

const reducers = {
  auth: {
    user: {
      name: "ale203",
      password: "123",
    },
    error_login: false,
    logged: false,
  },
};

//$ GENERATE ADD REDUCERS TO INITIAL STATE
// reducers.auth = authReducer;

//$

export default reducers;
