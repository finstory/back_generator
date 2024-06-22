
import S, { PrimaryService } from "@services_config/providers/providers-injector";
import InitialServices from "@services_config/initial-services";

//% SERVICES_IMPORTS:
import AuthService from "./auth/auth.service";
import ProductService from "./product/product.service";
import ModuleService from "./module/module.service";
import RouteService from "../app/route/services/route.service";
@InitialServices
export class AllServices {

    @PrimaryService product = new ProductService();
    @PrimaryService auth = new AuthService();
    @PrimaryService module = new ModuleService();
    @PrimaryService route = new RouteService();
}

export default new S as AllServices;