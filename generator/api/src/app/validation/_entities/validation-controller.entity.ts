//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@/_common/config/validations/getValidations";

export class ControllerController {
  //<CONTROLLERS>
  // getUser = async (req: C.getUser.Req, res: C.getUser.Res) => { };
  // postUserCreate = async (req: C.postUserCreate.Req, res: C.postUserCreate.Res) => { };
}

//<EXPORTS>
export const controller = new ControllerController();
export const validation = getValidations(ControllerController, C);
