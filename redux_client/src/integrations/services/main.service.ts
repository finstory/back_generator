
import S, { PrimaryService } from "@services_config/providers/providers-injector";
import InitialServices from "@/_common/config/services/decorators/initial-services";

//% REDUX_IMPORTS:
import { getAllActions } from "@config/redux/utils/actions-map.util";
import { objectGetState } from "@config/redux/utils/object-get-state.util";

//% SERVICES_IMPORTS:
import RestApi from "@/integrations/api/rest/rest.api";
import UserService from "@/test/user.service";

@InitialServices
export class MainService {

    protected api = new RestApi();
    protected action = getAllActions();
    protected state = objectGetState();
    @PrimaryService user = new UserService();

}

export default new S as MainService;