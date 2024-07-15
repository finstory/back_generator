import { Router } from "express";
import { controller, validation } from "@package/package.controller";

const router = Router();

router.get("/all", controller.getAllPackage);
router.post("/", validation.postPackage, controller.postPackage);
router.patch("/rename", validation.patchPackageRename, controller.patchPackageRename);
router.delete("/:moduleName", controller.deletePackage);

export default router;