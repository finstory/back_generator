
import S, { PrimaryService } from "@services_config/providers/providers-injector";
import InitialServices from "@/_common/config/services/decorators/initial-services";

//% REDUX_IMPORTS:
import { getAllActions } from "@/_common/config/redux/utils/actions-map.util";
import { objectGetState } from "@/_common/config/redux/utils/object-get-state.util";


//% SERVICES_IMPORTS:
import RestApi from "@/integrations/api/rest/rest.api";
import UserService from "@/test/user.service";
import OtherService from "@/test/other.service";


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