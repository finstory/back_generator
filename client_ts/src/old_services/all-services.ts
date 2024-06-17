
import InitialServices from "@/_common/config/services/initial-services";
import AuthService from "./auth/auth.service";

@InitialServices
export class AllServices {
    public word = "Hello World";

    public auth = new AuthService();

}

const S = new AllServices();
export default S;