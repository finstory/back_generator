"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<IMPORTS>
var express_1 = require("express");
var product_controller_1 = require("../product.controller");
var router = (0, express_1.Router)();
//<ROUTES>
router.get("/register", product_controller_1.validation.getProductRegister, product_controller_1.controller.getProductRegister);
exports.default = router;
