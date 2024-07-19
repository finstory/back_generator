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
const product_controller_entity_1 = require("./_entities/product-controller.entity");
Object.defineProperty(exports, "controller", { enumerable: true, get: function () { return product_controller_entity_1.controller; } });
Object.defineProperty(exports, "validation", { enumerable: true, get: function () { return product_controller_entity_1.validation; } });
const controller_settings_1 = __importDefault(require("../../../../_common/config/controllers/controller-settings"));
//<CONTROLLERS>
product_controller_entity_1.controller.getProductRegister = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body }, res) {
    const data = { controllerName: "getProductRegister" };
    res.status(200).json(data);
});
//<SETTINGS>
(0, controller_settings_1.default)(product_controller_entity_1.controller);
