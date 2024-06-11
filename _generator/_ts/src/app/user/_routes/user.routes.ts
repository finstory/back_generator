//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../user.controller";
import controllerMiddlewares from "@common/middlewares/controller.middleware";

//<CONFIGS>
controllerMiddlewares(controller, { error_wrapper: true });

const router = Router();

//<ROUTES>
router.get("/all", validation.getUser, controller.getUser);

export default router;