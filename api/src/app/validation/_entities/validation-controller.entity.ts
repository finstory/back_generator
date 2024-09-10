//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class ValidationController {
    //<CONTROLLERS>

    patchValidationReload = async (req: C.patchValidationReload.Req, res: C.patchValidationReload.Res) => {};

    deleteValidationValidateParams = async (req: C.deleteValidationValidateParams.Req, res: C.deleteValidationValidateParams.Res) => {};

    patchValidationValidateParams = async (req: C.patchValidationValidateParams.Req, res: C.patchValidationValidateParams.Res) => {};

    postValidationValidateParams = async (req: C.postValidationValidateParams.Req, res: C.postValidationValidateParams.Res) => {};

    deleteValidationRequestParams = async (req: C.deleteValidationRequestParams.Req, res: C.deleteValidationRequestParams.Res) => {};

    postValidationRequestParams = async (req: C.postValidationRequestParams.Req, res: C.postValidationRequestParams.Res) => {};

    patchValidationRequestParams = async (req: C.patchValidationRequestParams.Req, res: C.patchValidationRequestParams.Res) => {};
}

//<EXPORTS>
export const controller = new ValidationController();
export const validation = getValidations<ValidationController>(ValidationController, C);
