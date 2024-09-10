"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<IMPORTS>
const express_1 = require("express");
const validation_controller_1 = require("../validation.controller");
const router = (0, express_1.Router)();
//<ROUTES>
router.patch("/reload", validation_controller_1.validation.patchValidationReload, validation_controller_1.controller.patchValidationReload);
router.delete("/validate_params", validation_controller_1.validation.deleteValidationValidateParams, validation_controller_1.controller.deleteValidationValidateParams);
router.patch("/validate_params", validation_controller_1.validation.patchValidationValidateParams, validation_controller_1.controller.patchValidationValidateParams);
router.post("/validate_params", validation_controller_1.validation.postValidationValidateParams, validation_controller_1.controller.postValidationValidateParams);
router.delete("/request_params", validation_controller_1.validation.deleteValidationRequestParams, validation_controller_1.controller.deleteValidationRequestParams);
router.post("/request_params", validation_controller_1.validation.postValidationRequestParams, validation_controller_1.controller.postValidationRequestParams);
router.patch("/request_params", validation_controller_1.validation.patchValidationRequestParams, validation_controller_1.controller.patchValidationRequestParams);
exports.default = router;
