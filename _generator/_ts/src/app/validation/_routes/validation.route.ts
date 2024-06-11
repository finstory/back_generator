import { Router } from "express";
import { controller, validation } from "@user/user.controller";
import controllerMiddlewares from "@common/middlewares/controller.middleware";

controllerMiddlewares(controller, { error_wrapper: true });

const router = Router();

router.get("/all", validation.getUser, controller.getUser);

export default router;