//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../fast.controller";

const router = Router();

//<ROUTES>
router.post("/login", validation.postFastLogin, controller.postFastLogin);
router.get("/register", controller.getFastRegister);

export default router;
