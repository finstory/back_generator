//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../_entities/auth-controller.entity";
import controllerMiddlewares from "@common/middlewares/controller.middleware";

//<CONFIGS>
controllerMiddlewares(controller, { error_wrapper: true });
const router = Router();

//<ROUTES>
router.get("/allk/:id", validation.getAuthAllkById, controller.getAuthAllkById);
router.get("/all/:id", validation.getAllAuthById, controller.getAllAuthById);
router.get("/all", validation.getAllAuth, controller.getAllAuth);
router.get("/all", validation.getAllAuth, controller.getAllAuth);

router.post("/all/:id", validation);

export default router;
