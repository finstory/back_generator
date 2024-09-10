"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicInjectable = exports.InitialAll = exports.Initialization = exports.Initial = exports.Injectable = exports.initialInjector = exports.AutoInstance = exports.Auto = exports.Injector = exports.AllServices = void 0;
exports.Inject = Inject;
exports.BasicInject = BasicInject;
const _services_1 = require("../../services/all-services.ts");
Object.defineProperty(exports, "AllServices", { enumerable: true, get: function () { return _services_1.AllServices; } });
const auto_instantiate_services_1 = require("./auto-instantiate.services");
Object.defineProperty(exports, "Auto", { enumerable: true, get: function () { return auto_instantiate_services_1.Auto; } });
Object.defineProperty(exports, "AutoInstance", { enumerable: true, get: function () { return auto_instantiate_services_1.AutoInstance; } });
const initial_services_1 = require("./initial-services");
Object.defineProperty(exports, "Initial", { enumerable: true, get: function () { return initial_services_1.Initial; } });
Object.defineProperty(exports, "Initialization", { enumerable: true, get: function () { return initial_services_1.Initialization; } });
Object.defineProperty(exports, "InitialAll", { enumerable: true, get: function () { return initial_services_1.InitialAll; } });
class SuperInjector {
    constructor(S) {
        this.S = S;
    }
}
class Injector {
    constructor(listServices) {
        if (listServices && listServices.length > 0)
            listServices.forEach((service) => {
                const [propName, serviceInstance] = Object.entries(service)[0];
                this[propName] = serviceInstance;
            });
    }
}
exports.Injector = Injector;
const initialInjector = (S, secondTry = true) => {
    for (const service of Object.values(S))
        service._initial && service._initial(S);
    if (secondTry)
        for (const service of Object.values(S))
            service._initial && service._initial(S);
};
exports.initialInjector = initialInjector;
/**
 * [🇺🇸] Used to infer and inject a service into a property based on its naming convention.
 *
 * [🇪🇸] Usado para inferir e inyectar un servicio en una propiedad según su nomenclatura.
 *
 * ( Example => | '@Inject' private _user_email |
 *  Then do it using =>| _user like as UserService & _email like as EmailService | When UserService contains EmailService property)
 */
function Inject(target, propertyKey) {
    if (!target.constructor.__injectProps) {
        target.constructor.__injectProps = [];
    }
    target.constructor.__injectProps.push(propertyKey);
}
/**
 * [🇺🇸] Extend this class to inject all services marked by '@Inject' to call _initial method.
 *
 * [🇪🇸] Extiende esta clase para inyectar todos los servicios marcados por '@Inject' al llamar el método _initial.
 *
 * ( Only works with services that have been marked with '@Initialization' and '@Initial' in parent service or parent service include one _initial method. )
 */
class Injectable {
    constructor(S) {
        const props = this.constructor.__injectProps || [];
        for (const prop of props) {
            const [serviceGroup, serviceKey] = prop.startsWith('_') ? prop.slice(1).split('_') : prop.split('_');
            if (S && S[serviceGroup] && S[serviceGroup][serviceKey])
                this[prop] = S[serviceGroup][serviceKey];
            else if (S && S[serviceGroup])
                this[prop] = S[serviceGroup];
            else if (S)
                throw new Error(`Service ${serviceGroup}.${serviceKey} not provided in AllServices`);
        }
    }
}
exports.Injectable = Injectable;
/**
 * [🇺🇸] Used to mark a service that needs to be injected.
 *
 * [🇪🇸] Usado para marcar un servicio que se quiera inyectar.
 */
function BasicInject(target, propertyKey) {
    const existingInjectedProperties = Reflect.getMetadata('injectedProperties', target) || [];
    Reflect.defineMetadata('injectedProperties', [...existingInjectedProperties, propertyKey], target);
}
/**
 * [🇺🇸] Extend this class in a service WITHOUT SUB SERVICES to inject all services marked with '@BasicInject' when calling the _initial method.
 *
 * [🇪🇸] Extiende esta clase en un servicio ""SIN SUB SERVICIOS" para inyectarle todos los servicios marcados por '@BasicInject' al llamar el método _initial.
 *
 * ( Only works with top-level services that do not contain other subs services ).
 */
class BasicInjectable {
    _initial(S) {
        const injectedProperties = Reflect.getMetadata('injectedProperties', this) || [];
        for (const prop of injectedProperties) {
            const [serviceGroup, serviceKey] = prop.startsWith('_') ? prop.slice(1).split('_') : prop.split('_');
            if (S && S[serviceGroup] && S[serviceGroup][serviceKey])
                this[prop] = S[serviceGroup][serviceKey];
            else if (S && S[serviceGroup])
                this[prop] = S[serviceGroup];
            else if (S)
                throw new Error(`Service ${serviceGroup}.${serviceKey} not provided in AllServices`);
        }
    }
}
exports.BasicInjectable = BasicInjectable;
exports.default = SuperInjector;
