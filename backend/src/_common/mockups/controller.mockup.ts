export const module_controller = (moduleName: string): string => `//<IMPORTS>
import controller from "@${moduleName}/_models/${moduleName}-controllers.model";
import throwError from "@throw_error";

import S from "@services";

//<CONTROLLERS>


export default controller;` 