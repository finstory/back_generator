"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module_service = void 0;
const module_service = (moduleName) => {
    const UpModuleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
    return `//<IMPORTS>
import { AllServices as S, BasicInject, BasicInjectable } from "../config/services/service-injector.js";
import throwError from "../config/errors/throw-error.js";

class ${UpModuleName}Service extends BasicInjectable {

}


export default ${UpModuleName}Service;`;
};
exports.module_service = module_service;
