import throwError from "@throw_error";

export const module_service = (moduleName: string): string => {
    const UpModuleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
    return `//<IMPORTS>
import ServiceInjector from "@services_injector";
import throwError from "@throw_error";

class ${UpModuleName}Service extends ServiceInjector {

}


export default ${UpModuleName}Service;`
}