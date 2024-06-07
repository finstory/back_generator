//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../auth.controller";
import controllerMiddlewares from "@common/middleware/controller.middleware";

//<CONFIGS>
controllerMiddlewares(controller, { error_wrapper: true });
const router = Router();

//<ROUTES>

router.post("/all/:id", validation.postAuthAllById, controller.postAuthAllById);

export default router;
