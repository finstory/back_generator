//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class ProductController {
    //<CONTROLLERS>

    postProductRegisterSd = async (req: C.postProductRegisterSd.Req, res: C.postProductRegisterSd.Res) => {};

    patchProductRegisterById = async (req: C.patchProductRegisterById.Req, res: C.patchProductRegisterById.Res) => {};
}

//<EXPORTS>
export const controller = new ProductController();
export const validation = getValidations(ProductController, C);
