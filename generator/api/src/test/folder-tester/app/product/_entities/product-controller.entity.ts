//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class ProductController {
    //<CONTROLLERS>

    patchProductLogin = async (req: C.patchProductLogin.Req, res: C.patchProductLogin.Res) => {};

    postProduct = async (req: C.postProduct.Req, res: C.postProduct.Res) => {};

    getProduct = async (req: C.getProduct.Req, res: C.getProduct.Res) => {};
}

//<EXPORTS>
export const controller = new ProductController();
export const validation = getValidations(ProductController, C);
