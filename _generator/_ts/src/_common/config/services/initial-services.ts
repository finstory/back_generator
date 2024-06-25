import { initialInjector } from "@services_injector";

/**
 * [🇺🇸] Used to initialize all _initial methods of applied services.
 * 
 * [🇪🇸] Se usa para inicializar todos los métodos _initial del los servicios aplicados.
 * 
 * ( Only used on all-services.ts. )
 */
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


/**
 * [🇺🇸] Marks a property to be included in the _initial method, where it will be injected with the required services.
 * 
 * [🇪🇸] Marca una propiedad para incluirla en el método _initial, allí se le inyectarán los servicios que necesite.
 */
function Initial(target: any, propertyKey: string) {
    Reflect.defineMetadata('Initial', true, target, propertyKey);
    if (!target.constructor._initialProperties) {
        target.constructor._initialProperties = [];
    }
    target.constructor._initialProperties.push(propertyKey);
}

/**
 * [🇺🇸] Creates the _initial method, including the properties marked with '@Initial'.
 * 
 * [🇪🇸] Se usa para crear el método _initial, incluíra las propiedades marcadas por '@Initial'.
 */
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