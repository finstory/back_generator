//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class CompanyController {
    //<CONTROLLERS>

    patchCompanyRegister = async (req: C.patchCompanyRegister.Req, res: C.patchCompanyRegister.Res) => {};

    getCompany = async (req: C.getCompany.Req, res: C.getCompany.Res) => {};

    putCompanyLogin = async (req: C.putCompanyLogin.Req, res: C.putCompanyLogin.Res) => {};
}

//<EXPORTS>
export const controller = new CompanyController();
export const validation = getValidations(CompanyController, C) as CompanyController;
