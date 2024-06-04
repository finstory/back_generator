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
export function Instantiate<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            instantiateServices(this);
        }
    }
}
