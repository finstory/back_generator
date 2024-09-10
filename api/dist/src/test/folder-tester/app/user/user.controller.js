"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.validation = void 0;
//<IMPORTS>
const user_controller_entity_1 = require("./_entities/user-controller.entity");
Object.defineProperty(exports, "controller", { enumerable: true, get: function () { return user_controller_entity_1.controller; } });
Object.defineProperty(exports, "validation", { enumerable: true, get: function () { return user_controller_entity_1.validation; } });
const controller_settings_1 = __importDefault(require("../../../../_common/config/controllers/controller-settings"));
//<CONTROLLERS>
//<SETTINGS>
(0, controller_settings_1.default)(user_controller_entity_1.controller);
