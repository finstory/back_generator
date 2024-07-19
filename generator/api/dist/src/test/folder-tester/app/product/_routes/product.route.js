"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<IMPORTS>
const express_1 = require("express");
const product_controller_1 = require("../product.controller");
const router = (0, express_1.Router)();
//<ROUTES>
router.get("/register", product_controller_1.validation.getProductRegister, product_controller_1.controller.getProductRegister);
exports.default = router;
