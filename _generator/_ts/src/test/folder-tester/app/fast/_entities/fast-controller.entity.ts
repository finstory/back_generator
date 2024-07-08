//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class FastController {
    //<CONTROLLERS>

    patchFastChanged = async (req: C.patchFastChanged.Req, res: C.patchFastChanged.Res) => {};

    getFastRegister = async (req: C.getFastRegister.Req, res: C.getFastRegister.Res) => {};

    putFastLoginByName = async (req: C.putFastLoginByName.Req, res: C.putFastLoginByName.Res) => {};
}

//<EXPORTS>
export const controller = new FastController();
export const validation = getValidations(FastController, C);
