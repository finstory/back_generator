import { UpFirst } from "../helpers/wordsManager";

export const module_route = (moduleName: string): string => `//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../${moduleName}.controller";

const router = Router();

//<ROUTES>


export default router;`

export const express_endpoint = (endpoint: string = "/", requestType: string, controllerName: string,): string =>
    `router.${requestType}("${endpoint}", validation.${controllerName}, controller.${controllerName});`