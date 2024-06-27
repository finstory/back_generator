import { Router } from "express";
import { controller } from "@package/package.controller";
import controllerMiddlewares from "@middlewares/controller.middleware";

controllerMiddlewares(controller);

const router = Router();

router.get("/all", controller.getAllPackage);
router.post("/", controller.postPackage);
router.delete("/:moduleName", controller.deletePackage);

export default router;