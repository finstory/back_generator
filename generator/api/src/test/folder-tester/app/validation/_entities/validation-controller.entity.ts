//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class ValidationController {
    //<CONTROLLERS>

    putValidationRequestParams = async (req: C.putValidationRequestParams.Req, res: C.putValidationRequestParams.Res) => {};
}

//<EXPORTS>
export const controller = new ValidationController();
export const validation = getValidations(ValidationController, C);
