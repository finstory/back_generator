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
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.validation = void 0;
const user_controller_entity_1 = require("./_entities/user-controller.entity");
Object.defineProperty(exports, "controller", { enumerable: true, get: function () { return user_controller_entity_1.controller; } });
Object.defineProperty(exports, "validation", { enumerable: true, get: function () { return user_controller_entity_1.validation; } });
//<CONTROLLERS>
user_controller_entity_1.controller.getUser = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body }, res) {
    // throwError("not_found", "id");
    res.status(200).json({});
});
user_controller_entity_1.controller.postUserCreate = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, query, body }, res) {
    const data = { controllerName: "getUser" };
    res.status(200).json(data);
});
