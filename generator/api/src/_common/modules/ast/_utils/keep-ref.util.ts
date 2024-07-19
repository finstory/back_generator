export function keepObjRef<T>(obj: T, prop: keyof T) {
    return {
        get: () => obj[prop],
        set: (newValue: any) => obj[prop] = newValue
    };
}

export function keepArrayRef<T>(array: T[], index: number) {
    return {
        get: () => array[index],
        set: (newValue: T) => { array[index] = newValue; }
    };
}