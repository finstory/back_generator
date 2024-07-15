//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class UserController {
    //<CONTROLLERS>
}

//<EXPORTS>
export const controller = new UserController();
export const validation = getValidations(UserController, C);
