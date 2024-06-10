//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class AuthController {
    //<CONTROLLERS>

    authGetting = async (req: C.authGetting.Req, res: C.authGetting.Res) => {};
}

//<EXPORTS>
export const controller = new AuthController();
export const validation = getValidations(AuthController, C);
