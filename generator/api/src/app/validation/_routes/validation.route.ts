//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../validation.controller";

const router = Router();

//<ROUTES>
router.patch("/reload", validation.patchValidationReload, controller.patchValidationReload);
router.delete("/validate_params", validation.deleteValidationValidateParams, controller.deleteValidationValidateParams);
router.patch("/validate_params", validation.patchValidationValidateParams, controller.patchValidationValidateParams);
router.post("/validate_params", validation.postValidationValidateParams, controller.postValidationValidateParams);
router.delete("/request_params", validation.deleteValidationRequestParams, controller.deleteValidationRequestParams);
router.post("/request_params", validation.postValidationRequestParams, controller.postValidationRequestParams);
router.patch("/request_params", validation.patchValidationRequestParams, controller.patchValidationRequestParams);

export default router;
