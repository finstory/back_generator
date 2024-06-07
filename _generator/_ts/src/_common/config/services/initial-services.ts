import { initialInjector } from "@services_injector";

function InitialServices(target: any) {
    const originalConstructor = target;

    function construct(constructor: any, args: any[]) {
        const instance = new constructor(...args);
        initialInjector(instance);
        return instance;
    }

    const newConstructor: any = function (...args: any[]) {
        return construct(originalConstructor, args);
    }

    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}
export default InitialServices;