export function SliceSelector<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        allSelectors = {};

        constructor(...args: any[]) {
            super(...args);

            const allSelectors = {};
            // Recolectar métodos del prototipo
            Object.getOwnPropertyNames(constructor.prototype).forEach((methodName) => {
                if (methodName.endsWith("Selector")) {
                    allSelectors[methodName] = (this as any)[methodName].bind(this);
                }
            });

            // Recolectar propiedades de la instancia
            Object.keys(this).forEach((propName) => {
                if (propName.endsWith("Selector") && typeof (this as any)[propName] === 'function') {
                    allSelectors[propName] = (this as any)[propName].bind(this);
                }
            });

            this.allSelectors = allSelectors;
        }
    }
}


