//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../mati.controller";

const router = Router();

//<ROUTES>
router.patch("/hello", validation.patchMatiHello, controller.patchMatiHello);

export default router;
