//<IMPORTS>
import * as C from "@/app/user/_validations/_index";
import getValidations from "@/_common/config/validations/getValidations";

export class UserController {
  //<CONTROLLERS>
  getUser = async (req: C.getUser.Req, res: C.getUser.Res) => { };
  postUserCreate = async (req: C.postUserCreate.Req, res: C.postUserCreate.Res) => { };
}

//<EXPORTS>
export const controller = new UserController();
export const validation = getValidations(UserController, C);