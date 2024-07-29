//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../product.controller";

const router = Router();

//<ROUTES>
router.patch("/login", validation.patchProductLogin, controller.patchProductLogin);
router.post("/", validation.postProduct, controller.postProduct);
router.get("/", validation.getProduct, controller.getProduct);

export default router;
