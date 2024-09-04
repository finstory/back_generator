//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../product.controller";

const router = Router();

//<ROUTES>
router.post("/register/open", validation.postProductRegisterOpen, controller.postProductRegisterOpen);
router.delete("/register", validation.deleteProductRegister, controller.deleteProductRegister);
router.get("/", validation.getProduct, controller.getProduct);

export default router;
