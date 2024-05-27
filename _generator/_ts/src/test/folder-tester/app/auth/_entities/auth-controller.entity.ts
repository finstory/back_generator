//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";


export class AuthController {
  //<CONTROLLERS>
}

//<EXPORTS>
export const controller = new AuthController();
export const validation = getValidations(AuthController, C);
