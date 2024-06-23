//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../product.controller";
import controllerMiddlewares from "@common/middlewares/controller.middleware";

//<CONFIGS>
controllerMiddlewares(controller, { error_wrapper: true });
const router = Router();


//<ROUTES>


export default router;