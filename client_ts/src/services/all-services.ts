
import InitialServices from "@/_common/config/services/initial-services";
import AuthService from "./auth/auth.service";
import ProductService from "./product/product.service";
import { PrimaryService } from "../_common/config/services/providers/providers-injector";
import S from "../_common/config/services/providers/providers-injector";

@InitialServices
export class AllServices {

    @PrimaryService product = new ProductService();
    @PrimaryService auth = new AuthService();

}

export default new S as AllServices;