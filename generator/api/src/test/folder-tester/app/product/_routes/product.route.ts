//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../product.controller";

const router = Router();

//<ROUTES>
router.get("/register", validation.getProductRegister, controller.getProductRegister);

export default router;
