import { BehaviorSubject, Subject } from "rxjs";

// Helper type to get nested keys as a union type
type NestedKeys<T> = T extends object
    ? {
        [K in keyof T]: K extends string
        ? T[K] extends object
        ? `${K}` | `${K}.${NestedKeys<T[K]>}`
        : `${K}`
        : never;
    }[keyof T]
    : never;

// Helper type to get the type of a nested path
type PathValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
    ? Rest extends NestedKeys<T[K]>
    ? PathValue<T[K], Rest>
    : never
    : never
    : P extends keyof T
    ? Partial<T[P]>
    : never;

export function setNewState<S, P extends NestedKeys<S>>(
    path: P,
    newValue: PathValue<S, P>,
    sharedSubject: BehaviorSubject<S>
): void {
    const keys = path.split(".");
    sharedSubject.next(setNewStateRecursively(sharedSubject.getValue(), keys, newValue));
}

function setNewStateRecursively(current: any, keys: string[], newValue: any): any {
    const [firstKey, ...restKeys] = keys;

    if (restKeys.length === 0) {
        if (Array.isArray(current[firstKey]) && Array.isArray(newValue)) {
            return {
                ...current,
                [firstKey]: [...newValue],
            };
        }

        return {
            ...current,
            [firstKey]: typeof newValue === 'object' && newValue !== null
                ? { ...current[firstKey], ...newValue }
                : newValue,
        };
    }

    return {
        ...current,
        [firstKey]: setNewStateRecursively(current[firstKey] || {}, restKeys, newValue),
    };
}
