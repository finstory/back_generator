import { initialInjector } from "@services_injector";

function InitialServices(target: any) {
    const originalConstructor = target;

    function construct(constructor: any, args: any[]) {
        const instance = new constructor(...args);
        initialInjector(instance, true);
        return instance;
    }

    const newConstructor: any = function (...args: any[]) {
        return construct(originalConstructor, args);
    }

    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}

function Initial(target: any, propertyKey: string) {
    Reflect.defineMetadata('Initial', true, target, propertyKey);
    if (!target.constructor._initialProperties) {
        target.constructor._initialProperties = [];
    }
    target.constructor._initialProperties.push(propertyKey);
}


function Initialization(constructor: Function) {

    const properties = (constructor as any)._initialProperties;
    const _initial = function (S: any) {
        const serviceName = constructor.name;
        const serviceNameLower = serviceName.toLowerCase().replace('service', '');
        
        for (const prop of Object.getOwnPropertyNames(this)) {

            if (properties.includes(prop) && prop !== '_initial') {

                const propertyClass = Reflect.getMetadata('design:type', this, prop);
                S[serviceNameLower][prop] = new propertyClass(S);
                
            }
        }
    };

    constructor.prototype._initial = _initial;
}

function InitialAll(constructor: Function) {
    const _initial = function (S: any) {
        const serviceName = constructor.name;
        const serviceNameLower = serviceName.toLowerCase().replace('service', '');

        for (const prop of Object.getOwnPropertyNames(this)) {
            if (prop !== '_initial') {
                const propertyClass = Reflect.getMetadata('design:type', this, prop);
                S[serviceNameLower][prop] = new propertyClass(S);
            }
        }
    };

    constructor.prototype._initial = _initial;
}

export { Initial, Initialization, InitialAll };
export default InitialServices;