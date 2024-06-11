//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../_entities/auth-controller.entity";
import controllerMiddlewares from "@common/middlewares/controller.middleware";

//<CONFIGS>
controllerMiddlewares(controller, { error_wrapper: true });
const router = Router();

//<ROUTES>

router.post("/all/:id", validation);

export default router;
