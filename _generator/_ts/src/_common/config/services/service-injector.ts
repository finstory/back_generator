import { AllServices } from "@services";
import { Auto, AutoInstance } from "./auto-instantiate.services";
import { Initial, Initialization, InitialAll } from "./initial-services";
class SuperInjector {
    protected readonly S: AllServices;

    constructor(S: AllServices) {
        this.S = S;
    }
}

class Injector {
    constructor(listServices?: any[]) {
        if (listServices && listServices.length > 0)
            listServices.forEach((service) => {
                const [propName, serviceInstance] = Object.entries(service)[0];
                this[propName] = serviceInstance;
            });
    }
}

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
 * [🇺🇸] Extend this class to inject all services marked by '@Inject'.
 * 
 * [🇪🇸] Extiende esta clase para inyectar todos los servicios marcados por '@Inject'.
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


export {
    AllServices, Injector, Auto, AutoInstance, initialInjector,
    Inject, Injectable, Initial, Initialization, InitialAll
};
export default SuperInjector;
