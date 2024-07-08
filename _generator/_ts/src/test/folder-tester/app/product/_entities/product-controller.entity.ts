//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class ProductController {
    //<CONTROLLERS>

    postProductLogin = async (req: C.postProductLogin.Req, res: C.postProductLogin.Res) => {};
}

//<EXPORTS>
export const controller = new ProductController();
export const validation = getValidations(ProductController, C);
