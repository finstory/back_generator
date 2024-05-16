import controllers from "@user/controllers/user.controllers";
import { Router } from "express";

const router = Router();

router.get("/all/:id", controllers.getUser);

export default router;