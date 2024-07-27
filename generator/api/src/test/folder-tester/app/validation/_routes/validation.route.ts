//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../validation.controller";

const router = Router();

//<ROUTES>
router.put("/request_params", validation.putValidationRequestParams, controller.putValidationRequestParams);

export default router;
