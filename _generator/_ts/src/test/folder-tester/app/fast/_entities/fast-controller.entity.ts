//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class FastController {
    //<CONTROLLERS>

    getFastRegister = async (req: C.getFastRegister.Req, res: C.getFastRegister.Res) => {};
}

//<EXPORTS>
export const controller = new FastController();
export const validation = getValidations(FastController, C);
