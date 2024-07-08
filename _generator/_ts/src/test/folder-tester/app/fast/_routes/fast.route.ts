//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../fast.controller";

const router = Router();

//<ROUTES>
router.patch("/changed", controller.patchFastChanged);
router.get("/register", controller.getFastRegister);
router.put("/login/:name", controller.putFastLoginByName);

export default router;
