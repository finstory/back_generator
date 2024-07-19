"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../user/user.controller");
const controller_middleware_1 = __importDefault(require("../../../_common/middlewares/controller.middleware"));
(0, controller_middleware_1.default)(user_controller_1.controller, { error_wrapper: true });
const router = (0, express_1.Router)();
router.get("/all", user_controller_1.validation.getUser, user_controller_1.controller.getUser);
exports.default = router;
