import { AutoInstance, Auto, Initialization, Initial } from "@services_injector";
import ValidateModelService from "./features/validation-model.service";

@AutoInstance
@Initialization
class ValidationService {

    @Initial @Auto public model: ValidateModelService;

}

export default ValidationService;