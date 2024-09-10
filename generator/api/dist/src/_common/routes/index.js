"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
//<IMPORTS>
const package_routes_1 = __importDefault(require("../../app/package/_routes/package.routes"));
const endpoint_route_1 = __importDefault(require("../../app/endpoint/_routes/endpoint.route"));
const validation_route_1 = __importDefault(require("../../app/validation/_routes/validation.route"));
exports.routes = (0, express_1.Router)();
//<ROUTES>
exports.routes.use("/module", package_routes_1.default);
exports.routes.use("/endpoint", endpoint_route_1.default);
exports.routes.use("/validation", validation_route_1.default);
exports.default = exports.routes;
