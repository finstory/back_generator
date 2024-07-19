"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = Auto;
exports.AutoInstance = AutoInstance;
/**
 * [🇺🇸] Marks a property to be instantiated without dependencies.
 *
 * [🇪🇸] Marca una propiedad para instanciarla sin dependencias.
 */
function Auto(target, propertyKey) {
    const propertyType = Reflect.getMetadata("design:type", target, propertyKey);
    if (!target.constructor._autoInstantiatedProperties) {
        target.constructor._autoInstantiatedProperties = [];
    }
    target.constructor._autoInstantiatedProperties.push({ propertyKey, propertyType });
}
function instantiateServices(instance) {
    const properties = instance.constructor._autoInstantiatedProperties;
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
function AutoInstance(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            instantiateServices(this);
        }
    };
}
