
import S, { PrimaryService } from "@services_config/providers/providers-injector";
import InitialServices from "@/_common/config/services/decorators/initial-services";

//% REDUX_IMPORTS:


//% SERVICES_IMPORTS:
// import ValidationService from "@/modules/validation/services/validation.service";
// import ModuleService from "@/modules/module/services/module.service";
// import RouteService from "@route/services/route.service";
import RestApi from "@/_common/api/rest/rest.api";
import UserService from "@/test/user.service";
import OtherService from "@/test/other.service";
import { getAllActions } from "../config/redux/utils/actions-map.util";
import { objectGetState } from "../config/redux/utils/object-get-state.util";


@InitialServices
export class AllServices {

    protected api = new RestApi();
    protected action = getAllActions();
    protected state = objectGetState();

    constructor() {
        // console.log("AllServices", this.store.user.children);
    }

    @PrimaryService user = new UserService();
    @PrimaryService other = new OtherService();
    // @PrimaryService module = new ModuleService();
    // @PrimaryService route = new RouteService();
    // @PrimaryService validation = new ValidationService();

}

export default new S as AllServices;