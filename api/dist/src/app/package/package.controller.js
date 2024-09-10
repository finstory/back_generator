"use strict";
//<IMPORTS>
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
const package_controller_entity_1 = require("./_entities/package-controller.entity");
Object.defineProperty(exports, "controller", { enumerable: true, get: function () { return package_controller_entity_1.controller; } });
Object.defineProperty(exports, "validation", { enumerable: true, get: function () { return package_controller_entity_1.validation; } });
const _services_1 = __importDefault(require("../../_common/services/all-services.js"));
const controller_settings_1 = __importDefault(require("../../_common/config/controllers/controller-settings"));
const _throw_error_1 = __importDefault(require("../../_common/config/errors/throw-error.js"));
//<CONTROLLERS>
package_controller_entity_1.controller.getAllPackage = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body }, res) {
    const data = yield _services_1.default.package.getAllModuleDB();
    res.status(200).json(data);
});
package_controller_entity_1.controller.postPackage = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body: { moduleName } }, res) {
    !moduleName && (0, _throw_error_1.default)("PACKAGE", "bad_request", "moduleName");
    const data = yield _services_1.default.package.createModule(moduleName);
    res.status(200).json(data);
});
package_controller_entity_1.controller.patchPackageRename = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params: { moduleName }, body: { newModuleName } }, res) {
    !moduleName && (0, _throw_error_1.default)("PACKAGE", "bad_request", "moduleName");
    !newModuleName && (0, _throw_error_1.default)("PACKAGE", "bad_request", "newModuleName");
    res.status(200).json(`Module '${moduleName}' renamed to '${newModuleName}' successfully.`);
});
package_controller_entity_1.controller.deletePackage = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params: { moduleName } }, res) {
    !moduleName && (0, _throw_error_1.default)("PACKAGE", "bad_request", "moduleName");
    yield _services_1.default.package.deleteModule(moduleName);
    res.status(200).json(`Module '${moduleName}' deleted successfully.`);
});
//<SETTINGS>
(0, controller_settings_1.default)(package_controller_entity_1.controller);
