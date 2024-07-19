export const module_service = (moduleName: string): string => {
    const UpModuleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
    return `//<IMPORTS>
import { AllServices as S, BasicInject, BasicInjectable } from "@services_injector";
import throwError from "@throw_error";

class ${UpModuleName}Service extends BasicInjectable {

}


export default ${UpModuleName}Service;`
}