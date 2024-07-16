//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../product.controller";

const router = Router();

//<ROUTES>
router.post("/register_sd", controller.postProductRegisterSd);
router.patch("/register/:id", controller.patchProductRegisterById);

export default router;
