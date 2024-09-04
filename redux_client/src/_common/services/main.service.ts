
import S, { PrimaryService } from "@services_config/providers/providers-injector";
import InitialServices from "@/_common/config/services/decorators/initial-services";

//% REDUX_IMPORTS:
import { getAllActions } from "@config/redux/utils/actions-map.util";
import { objectGetState } from "@config/redux/utils/object-get-state.util";

//% SERVICES_IMPORTS:
import RestApi from "@/integrations/api-rest/rest.api";
import ModuleService from "@/app/module/services/module.service";
import RouteService from "@/app/route/services/route.service";

@InitialServices
export class MainService {

    protected api = new RestApi();
    protected action = getAllActions();
    protected state = objectGetState();

    @PrimaryService route = new RouteService();
    @PrimaryService module = new ModuleService();
}

export default new S as MainService;