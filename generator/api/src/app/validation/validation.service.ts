import { AutoInstance, Auto, Initialization, Initial } from "@services_injector";
import ValidateModelService from "./features/validation-model.service";
import ValidationRequestParamsService from "./features/validation-request-params.service";

@AutoInstance
@Initialization
class ValidationService {

    @Initial @Auto public model: ValidateModelService;
    @Initial @Auto public requestParams: ValidationRequestParamsService;

}

export default ValidationService;