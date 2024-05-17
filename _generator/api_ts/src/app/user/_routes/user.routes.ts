import controllers from "@user/controllers/user.controllers";
import { Response, Router } from "express";
import { validator } from "../_validator/getUser";

const router = Router();


router.get("/all", validator, controllers.getUser);

export default router;
