"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.validation = void 0;
//<IMPORTS>
const validation_controller_entity_1 = require("./_entities/validation-controller.entity");
Object.defineProperty(exports, "controller", { enumerable: true, get: function () { return validation_controller_entity_1.controller; } });
Object.defineProperty(exports, "validation", { enumerable: true, get: function () { return validation_controller_entity_1.validation; } });
const controller_settings_1 = __importDefault(require("../../_common/config/controllers/controller-settings"));
const _services_1 = __importDefault(require("../../_common/services/all-services.ts"));
const json_1 = require("../../_common/db/json");
//<CONTROLLERS>
validation_controller_entity_1.controller.patchValidationReload = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body: { controllerName, moduleName } }, res) {
    const getAllProperties = _services_1.default.validation.requestParams.getAllProperties;
    const updateData = {};
    const properties = ["params", "query", "body", "response_body"];
    for (const property of properties) {
        updateData[property] = yield getAllProperties(moduleName, controllerName, property);
    }
    yield json_1.json_db.requestParams.update(moduleName, controllerName, updateData);
    res.status(200).json(`Validation to ${controllerName} has been reloaded`);
});
validation_controller_entity_1.controller.postValidationRequestParams = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body }, res) {
    const data = { controllerName: "postValidationRequestParams" };
    res.status(200).json(data);
});
validation_controller_entity_1.controller.patchValidationRequestParams = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body }, res) {
    const data = { controllerName: "putValidationRequestParams" };
    res.status(200).json(data);
});
validation_controller_entity_1.controller.deleteValidationRequestParams = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body }, res) {
    const data = { controllerName: "deleteValidationRequestParams" };
    res.status(200).json(data);
});
validation_controller_entity_1.controller.postValidationValidateParams = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body }, res) {
    const data = { controllerName: "postValidationValidateParams" };
    res.status(200).json(data);
});
validation_controller_entity_1.controller.patchValidationValidateParams = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body }, res) {
    const data = { controllerName: "patchValidationValidateParams" };
    res.status(200).json(data);
});
validation_controller_entity_1.controller.deleteValidationValidateParams = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body }, res) {
    const data = { controllerName: "deleteValidationValidateParams" };
    res.status(200).json(data);
});
//<SETTINGS>
(0, controller_settings_1.default)(validation_controller_entity_1.controller);
