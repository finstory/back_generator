
import S, { PrimaryService } from "@services_config/providers/providers-injector";
import InitialServices from "@/_common/config/services/decorators/initial-services";

//% SERVICES_IMPORTS:
import ModuleService from "@/modules/module/services/module.service";
import RouteService from "@route/services/route.service";
import RestApi from "@/_common/api/rest";

@InitialServices
export class AllServices {

    protected api = new RestApi();

    @PrimaryService module = new ModuleService();
    @PrimaryService route = new RouteService();
}

export default new S as AllServices;