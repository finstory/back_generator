import { Instantiate, Auto, InitialAll } from "@services_injector";
import ControllerFileService from "./features/controller-file.service";
import ControllerEntityService from "./features/controller-entity.service";
@Instantiate
@InitialAll
class ControllerService {

    @Auto public entity: ControllerEntityService;
    @Auto public file: ControllerFileService;

}

export default ControllerService;