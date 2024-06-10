import { AllServices, AutoInstance, Auto, Initialization, Initial } from "@services_injector";
import ExpressRouteService from "./features/express-route.service";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";
@AutoInstance
@Initialization
class EndpointService {

    @Auto @Initial public expressRoute: ExpressRouteService;


    // _initial = (S: AllServices) => {
    //     S.endpoint.express_route = new ExpressRouteService([
    //         { _fs_file: S.fs.file },
    //         { _ast_import: S.ast.import },
    //         { _ast_route_function: S.ast.routeFunction },
    //         { _generator_tag: S.generator.tag }
    //     ]);
    // }
}

export default EndpointService;