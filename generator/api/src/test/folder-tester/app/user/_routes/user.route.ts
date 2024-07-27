//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../user.controller";

const router = Router();

//<ROUTES>
router.get("/", validation.getUser, controller.getUser);
router.post("/register/:id", validation.postUserRegisterById, controller.postUserRegisterById);

export default router;
