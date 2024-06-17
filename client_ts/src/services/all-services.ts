
import InitialServices from "@/_common/config/services/initial-services";
import AuthService from "./auth/auth.service";
import ProductService from "./product/product.service";

@InitialServices
export class AllServices {

    public product = new ProductService();
    public auth = new AuthService();

}

const S = {
    get auth() {
        return new AllServices().auth;
    },
}
export default S;