//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class UserController {
    //<CONTROLLERS>

    getUser = async (req: C.getUser.Req, res: C.getUser.Res) => {};

    postUserRegister = async (req: C.postUserRegister.Req, res: C.postUserRegister.Res) => {};
}

//<EXPORTS>
export const controller = new UserController();
export const validation = getValidations(UserController, C);
