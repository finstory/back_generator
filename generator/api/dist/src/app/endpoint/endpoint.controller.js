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
const endpoint_controller_entity_1 = require("./_entities/endpoint-controller.entity");
Object.defineProperty(exports, "controller", { enumerable: true, get: function () { return endpoint_controller_entity_1.controller; } });
Object.defineProperty(exports, "validation", { enumerable: true, get: function () { return endpoint_controller_entity_1.validation; } });
const controller_settings_1 = __importDefault(require("../../_common/config/controllers/controller-settings"));
const _services_1 = __importDefault(require("../../_common/services/all-services.ts"));
const json_1 = require("../../_common/db/json");
//<CONTROLLERS>
endpoint_controller_entity_1.controller.postEndpoint = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body: { moduleName, route } }, res) {
    const db_route = yield json_1.json_db.route.create(moduleName, route);
    yield _services_1.default.endpoint.expressRoute.createRoute(moduleName, db_route);
    yield _services_1.default.validation.model.createFile(moduleName, db_route.controllerName);
    yield _services_1.default.validation.model.addBarrelExport(moduleName, db_route.controllerName);
    yield _services_1.default.controller.entity.createControllerEntity(moduleName, db_route.controllerName);
    yield _services_1.default.controller.file.createController(moduleName, db_route.controllerName);
    res.status(200).json(`Endpoint ${moduleName} created successfully.`);
});
endpoint_controller_entity_1.controller.patchEndpoint = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body: { moduleName, route, newRoute } }, res) {
    const db_route = yield json_1.json_db.route.edit(moduleName, route, newRoute);
    const controllerName = newRoute.controllerName || db_route.controllerName;
    yield _services_1.default.endpoint.expressRoute.editRoute(moduleName, route, Object.assign({ controllerName }, newRoute));
    yield _services_1.default.validation.model.renameBarrelExport(moduleName, route.controllerName, controllerName);
    yield _services_1.default.validation.model.renameFile(moduleName, route.controllerName, controllerName);
    yield _services_1.default.controller.entity.editControllerEntity(moduleName, route.controllerName, controllerName);
    yield _services_1.default.controller.file.renameController(moduleName, route.controllerName, db_route.controllerName);
    res.status(200).json(`Endpoint ${moduleName} edited successfully.`);
});
endpoint_controller_entity_1.controller.patchEndpointDescription = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body: { moduleName, route, description } }, res) {
    yield json_1.json_db.route.updateDescription(moduleName, route, description);
    res.status(200).json(`Description ${moduleName} edited successfully.`);
});
endpoint_controller_entity_1.controller.deleteEndpoint = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body: { moduleName, route } }, res) {
    yield json_1.json_db.route.delete(moduleName, route);
    yield _services_1.default.endpoint.expressRoute.removeRoute(moduleName, route);
    yield _services_1.default.validation.model.removeBarrelExport(moduleName, route.controllerName);
    yield _services_1.default.validation.model.removeFile(moduleName, route.controllerName);
    yield _services_1.default.controller.entity.removeControllerEntity(moduleName, route.controllerName);
    yield _services_1.default.controller.file.removeController(moduleName, route.controllerName);
    res.status(200).json(`Endpoint ${moduleName} deleted successfully.`);
});
//<SETTINGS>
(0, controller_settings_1.default)(endpoint_controller_entity_1.controller);
