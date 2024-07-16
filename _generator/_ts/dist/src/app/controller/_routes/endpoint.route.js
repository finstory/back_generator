"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../user/user.controller");
const router = (0, express_1.Router)();
router.get("/all", user_controller_1.validation.getUser, user_controller_1.controller.getUser);
exports.default = router;
