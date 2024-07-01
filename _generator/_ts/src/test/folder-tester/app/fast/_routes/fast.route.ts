//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../fast.controller";

const router = Router();

//<ROUTES>
router.get("/register", controller.getFastRegister);

export default router;
