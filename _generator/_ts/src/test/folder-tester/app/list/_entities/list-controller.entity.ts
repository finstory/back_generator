//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";


export class ListController {
  //<CONTROLLERS>
}

//<EXPORTS>
export const controller = new ListController();
export const validation = getValidations(ListController, C);
