export function addProxySuffix<T extends object>(instance: T, suffix: string): T {

    // expamle suffixList = ["int", "ext"] => suffix= "int/ext/"
    // const suffix = suffixList.map(s => `${s}/`).join('');
    const handler: ProxyHandler<T> = {
        get(target, prop: string | symbol, receiver) {
            if (typeof prop === 'string' && prop.startsWith(suffix)) {
                const originalProp = prop.replace(suffix, '');
                if (typeof target[originalProp] === 'function') {
                    return target[originalProp];
                }
            }
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop: string | symbol, value, receiver) {
            return Reflect.set(target, prop, value, receiver);
        }
    };

    const proxyInstance = new Proxy(instance, handler);

    // Renombrar métodos
    Object.getOwnPropertyNames(instance).forEach(prop => {
        if (typeof instance[prop] === 'function' && prop !== 'constructor') {
            const newMethodName = `${suffix}${prop}`;
            proxyInstance[newMethodName] = instance[prop];
        }
    });

    return proxyInstance;
}

export function removeProxySuffix<T extends object>(instance: T, suffixList: string[]): T {

    const handler: ProxyHandler<T> = {
        get(target, prop: string | symbol, receiver) {
            if (typeof prop === 'string' && !suffixList.some(suffix => prop.startsWith(suffix))) {
                const suffixedProp = suffixList.reduce((acc, suffix) => `${suffix}${acc}`, prop);
                if (typeof target[suffixedProp] === 'function') {
                    return target[suffixedProp];
                }
            }
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop: string | symbol, value, receiver) {
            return Reflect.set(target, prop, value, receiver);
        }
    };

    const proxyInstance = new Proxy(instance, handler);

    Object.getOwnPropertyNames(instance).forEach(prop => {
        if (typeof instance[prop] === 'function' && suffixList.some(suffix => prop.startsWith(suffix))) {
            const originalMethodName = suffixList.reduce((acc, suffix) => prop.replace(suffix, ''), prop);
            proxyInstance[originalMethodName] = instance[prop];
        }
    });

    return proxyInstance;
}

