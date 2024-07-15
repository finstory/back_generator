

/**
 * [🇺🇸] Marks a property to be instantiated without dependencies.
 * 
 * [🇪🇸] Marca una propiedad para instanciarla sin dependencias.
 */
export function Auto(target: any, propertyKey: string) {
    const propertyType = Reflect.getMetadata("design:type", target, propertyKey);
    if (!target.constructor._autoInstantiatedProperties) {
        target.constructor._autoInstantiatedProperties = [];
    }
    target.constructor._autoInstantiatedProperties.push({ propertyKey, propertyType });
}

function instantiateServices(instance: any) {
    const properties = (instance.constructor as any)._autoInstantiatedProperties;
    if (properties) {
        for (const { propertyKey, propertyType } of properties) {
            instance[propertyKey] = new propertyType();
        }
    }
}

/**
 * [🇺🇸] The properties marked with '@Auto' will be instantiated empty in the constructor.
 * 
 * [🇪🇸] Las propiedades marcadas por '@Auto' serán instanciadas vacías en el constructor.
 */

export function AutoInstance<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            instantiateServices(this);
        }
    }
}
