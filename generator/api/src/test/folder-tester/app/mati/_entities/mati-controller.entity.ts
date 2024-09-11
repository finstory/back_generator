//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "../config/validations/getValidations";

export class MatiController {
    //<CONTROLLERS>

    patchMatiHello = async (req: C.patchMatiHello.Req, res: C.patchMatiHello.Res) => {};
}

//<EXPORTS>
export const controller = new MatiController();
export const validation = getValidations(MatiController, C) as MatiController;
