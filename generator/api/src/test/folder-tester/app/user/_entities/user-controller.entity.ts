//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class UserController {
    //<CONTROLLERS>

    putUser = async (req: C.putUser.Req, res: C.putUser.Res) => {};

    deleteUser = async (req: C.deleteUser.Req, res: C.deleteUser.Res) => {};

    patchUser = async (req: C.patchUser.Req, res: C.patchUser.Res) => {};

    postUser = async (req: C.postUser.Req, res: C.postUser.Res) => {};

    getUserLoginUser = async (req: C.getUserLoginUser.Req, res: C.getUserLoginUser.Res) => {};

    deleteUserRegister = async (req: C.deleteUserRegister.Req, res: C.deleteUserRegister.Res) => {};
}

//<EXPORTS>
export const controller = new UserController();
export const validation = getValidations(UserController, C);
