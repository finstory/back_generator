
import InitialServices from "@/_common/config/services/initial-services";
import AuthService from "./auth/auth.service";
import ProductService from "@/old_services/product.service";

@InitialServices
export class AllServices {

    public product = new ProductService();
    public auth = new AuthService();

}

const S = new AllServices();
export default S;