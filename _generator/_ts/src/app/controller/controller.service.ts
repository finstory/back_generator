import { AutoInstance, Auto, Initialization, Initial } from "@services_injector";
import ControllerFileService from "./features/controller-file.service";
import ControllerEntityService from "./features/controller-entity.service";
@AutoInstance
@Initialization
class ControllerService {

    @Initial @Auto public entity: ControllerEntityService;
    @Initial @Auto public file: ControllerFileService;

}

export default ControllerService;