import { UpFirst } from "../helpers/wordsManager"

export const module_controller = (moduleName: string): string => `//<IMPORTS>
import controller from "./_entities/${moduleName}-controller.entity";
import throwError from "@throw_error";

import S from "@services";

//<CONTROLLERS>


export default controller;`

export const controller_entity = (moduleName: string): string => `//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";


export class ${UpFirst(moduleName)}Controller {
  //<CONTROLLERS>
}

//<EXPORTS>
export const controller = new ${UpFirst(moduleName)}Controller();
export const validation = getValidations(${UpFirst(moduleName)}Controller, C);
`
