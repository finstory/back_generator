//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class AuthController {
    //<CONTROLLERS>

    getEmailUserById = async (req: C.getEmailUserById.Req, res: C.getEmailUserById.Res) => { };
}

//<EXPORTS>
export const controller = new AuthController();
export const validation = getValidations(AuthController, C);
