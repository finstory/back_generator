import { Router } from "express";
import { controller, validation } from "@package/package.controller";
import controllerMiddlewares from "@common/middlewares/controller.middleware";

controllerMiddlewares(controller, { error_wrapper: true });

const router = Router();
router.get("/test", validation.getAllPackage);
router.get("/all", controller.getAllPackage);
router.post("/", controller.postPackage);
export default router;