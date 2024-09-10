import { AllServices, AutoInstance, Auto, Initialization, Initial } from "@services_injector";
import ExpressRouteService from "./features/express-route.service";

@AutoInstance
@Initialization
class EndpointService {

    @Auto @Initial public expressRoute: ExpressRouteService;

}

export default EndpointService;