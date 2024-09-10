"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller_model = exports.controller_entity = exports.controller = exports.module_controller = void 0;
const wordsManager_1 = require("../helpers/wordsManager");
const module_controller = (moduleName) => `//<IMPORTS>
import { controller, validation } from "./_entities/${moduleName}-controller.entity";
import controllerSettings from "../config/controllers/controller-settings";
import throwError from "../config/errors/throw-error.ts";
import S from "../services/all-services.ts";

//<CONTROLLERS>


//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };`;
exports.module_controller = module_controller;
const controller = (controllerName) => `
controller.${controllerName} = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "${controllerName}" };


  res.status(200).json(data);
};`;
exports.controller = controller;
const controller_entity = (moduleName) => `//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "../config/validations/getValidations";


export class ${(0, wordsManager_1.UpFirst)(moduleName)}Controller {
  //<CONTROLLERS>
}

//<EXPORTS>
export const controller = new ${(0, wordsManager_1.UpFirst)(moduleName)}Controller();
export const validation = getValidations(${(0, wordsManager_1.UpFirst)(moduleName)}Controller, C) as ${(0, wordsManager_1.UpFirst)(moduleName)}Controller;`;
exports.controller_entity = controller_entity;
const controller_model = (controllerName) => `
${controllerName} = async (req: C.${controllerName}.Req, res: C.${controllerName}.Res) => { };`;
exports.controller_model = controller_model;
