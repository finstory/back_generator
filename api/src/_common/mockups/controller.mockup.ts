import { UpFirst } from "../helpers/wordsManager";


export const module_controller = (moduleName: string): string => `//<IMPORTS>
import { controller, validation } from "./_entities/${moduleName}-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>


//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };`

export const controller = (controllerName: string): string => `
controller.${controllerName} = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "${controllerName}" };


  res.status(200).json(data);
};`;


export const controller_entity = (moduleName: string): string => `//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";


export class ${UpFirst(moduleName)}Controller {
  //<CONTROLLERS>
}

//<EXPORTS>
export const controller = new ${UpFirst(moduleName)}Controller();
export const validation = getValidations(${UpFirst(moduleName)}Controller, C) as ${UpFirst(moduleName)}Controller;`

export const controller_model = (controllerName: string): string => `
${controllerName} = async (req: C.${controllerName}.Req, res: C.${controllerName}.Res) => { };`;