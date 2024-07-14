import { AllServices } from "@S";
import { Auto, AutoInstance } from "./auto-instantiate-services";
import { Initial, Initialization, InitialAll } from "./initial-services";
import "reflect-metadata";

const initialInjector = (S: AllServices, secondTry: boolean = true) => {
    for (const service of Object.values(S)) service._initial && service._initial(S);
    if (secondTry) for (const service of Object.values(S)) service._initial && service._initial(S);

}

/**
 * [🇺🇸] Used to infer and inject a service into a property based on its naming convention.
 * 
 * [🇪🇸] Usado para inferir e inyectar un servicio en una propiedad según su nomenclatura.
 * 
 * ( Example => | '@Inject' private _user_email |
 *  Then do it using =>| _user like as UserService & _email like as EmailService | When UserService contains EmailService property)
 */
function Inject(target: any, propertyKey: string) {
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
    constructor(S: AllServices) {
        const props = (this.constructor as any).__injectProps || [];
        for (const prop of props) {

            const [serviceGroup, serviceKey] = prop.startsWith('_') ? prop.slice(1).split('_') : prop.split('_');

            if (S && S[serviceGroup] && S[serviceGroup][serviceKey])
                (this as any)[prop] = S[serviceGroup][serviceKey];

            else if (S && S[serviceGroup])
                (this as any)[prop] = S[serviceGroup];

            else if (S)
                throw new Error(`Service ${serviceGroup}.${serviceKey} not provided in AllServices`);

        }
    }
}

/**
 * [🇺🇸] Used to mark a service that needs to be injected.
 * 
 * [🇪🇸] Usado para marcar un servicio que se quiera inyectar.
 */
function BasicInject(target: any, propertyKey: string) {
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
    _initial(S: AllServices) {
        const injectedProperties = Reflect.getMetadata('injectedProperties', this) || [];

        for (const prop of injectedProperties) {
            const [serviceGroup, serviceKey] = prop.startsWith('_') ? prop.slice(1).split('_') : prop.split('_');

            if (S && S[serviceGroup] && S[serviceGroup][serviceKey])
                (this as any)[prop] = S[serviceGroup][serviceKey];

            else if (S && S[serviceGroup])
                (this as any)[prop] = S[serviceGroup];

            else if (S)
                throw new Error(`Service ${serviceGroup}.${serviceKey} not provided in AllServices`);
        }
    }
}

export {
    AllServices, Auto, AutoInstance, initialInjector,
    Inject, Injectable, Initial, Initialization, InitialAll,
    BasicInject, BasicInjectable,
};
