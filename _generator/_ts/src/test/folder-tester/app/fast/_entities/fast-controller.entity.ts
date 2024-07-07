//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class FastController {
    //<CONTROLLERS>

    postFastLogin = async (req: C.postFastLogin.Req, res: C.postFastLogin.Res) => {};

    undefinedFast = async (req: C.undefinedFast.Req, res: C.undefinedFast.Res) => {};

    getFastRegister = async (req: C.getFastRegister.Req, res: C.getFastRegister.Res) => {};
}

//<EXPORTS>
export const controller = new FastController();
export const validation = getValidations(FastController, C);
