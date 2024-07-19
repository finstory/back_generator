//$ GENERATE IMPORT REDUCERS
import { authReducer } from "../../services/useAuthServices";
import { homeReducer } from "../../services/useHomeServices";
import { routeReducer } from "../../services/useRouteServices";
import { requestReducer } from "../../services/useRequestServices";
//$

const reducers = {};

//$ GENERATE ADD REDUCERS TO INITIAL STATE
reducers.auth = authReducer;
reducers.home = homeReducer;
reducers.route = routeReducer;
reducers.request = requestReducer;

//$

export default reducers;
