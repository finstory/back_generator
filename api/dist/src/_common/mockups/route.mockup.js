"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.express_endpoint = exports.module_route = void 0;
const module_route = (moduleName) => `//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../${moduleName}.controller";

const router = Router();

//<ROUTES>


export default router;`;
exports.module_route = module_route;
const express_endpoint = (endpoint = "/", requestType, controllerName) => `router.${requestType}("${endpoint}", validation.${controllerName}, controller.${controllerName});`;
exports.express_endpoint = express_endpoint;
