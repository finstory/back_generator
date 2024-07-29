//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../user.controller";

const router = Router();

//<ROUTES>
router.get("/", validation.getUser, controller.getUser);
router.post("/register", validation.postUserRegister, controller.postUserRegister);

export default router;
