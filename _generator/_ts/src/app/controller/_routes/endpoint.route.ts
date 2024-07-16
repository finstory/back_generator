import { Router } from "express";
import { controller, validation } from "@user/user.controller";

const router = Router();

router.get("/all", validation.getUser, controller.getUser);

export default router;