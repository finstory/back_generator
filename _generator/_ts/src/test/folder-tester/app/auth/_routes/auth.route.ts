//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../auth.controller";
import controllerMiddlewares from "@common/middleware/controller.middleware";

//<CONFIGS>
controllerMiddlewares(controller, { error_wrapper: true });
const router = Router();


//<ROUTES>


export default router;