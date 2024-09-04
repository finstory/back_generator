//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class ProductController {
    //<CONTROLLERS>

    deleteProductRegisterOpen = async (req: C.deleteProductRegisterOpen.Req, res: C.deleteProductRegisterOpen.Res) => {};

    deleteProductRegister = async (req: C.deleteProductRegister.Req, res: C.deleteProductRegister.Res) => {};

    getProduct = async (req: C.getProduct.Req, res: C.getProduct.Res) => {};
}

//<EXPORTS>
export const controller = new ProductController();
export const validation = getValidations(ProductController, C) as ProductController;
