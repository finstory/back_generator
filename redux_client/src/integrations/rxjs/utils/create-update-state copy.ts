import { BehaviorSubject } from "rxjs";
import { setNewState } from "./set-new-state";

export type UpdateStateFunctions<T> = {
    [K in keyof T]: T[K] extends object
    ? UpdateStateFunctions<T[K]> & { set: (newValue: Partial<T[K]>) => void, get: () => T[K] }
    : { set: (newValue: T[K]) => void, get: () => T[K] };
};


export function createUpdateState<T>(state: T, sharedSubject: BehaviorSubject<T>, path: string[] = []): UpdateStateFunctions<T> {
    const updateState: any = {};

    Object.keys(state as object).forEach((key) => {
        const fullPath: any = [...path, key].join(".");
        if (Array.isArray(state[key])) {
            updateState[key] = {
                set: (newValue: any) => {
                    setNewState(fullPath, newValue, sharedSubject);
                },
                get: () => {
                    const nestedKeys = fullPath.split(".");
                    let value = sharedSubject.getValue();
                    for (const nestedKey of nestedKeys) {
                        value = value[nestedKey];
                    }
                    return value;
                },
            }
        }
        else {
            updateState[key] = {

                set: (newValue: any) => {
                    setNewState(fullPath, newValue, sharedSubject);
                },
                get: () => {
                    const nestedKeys = fullPath.split(".");
                    let value = sharedSubject.getValue();
                    for (const nestedKey of nestedKeys) {
                        value = value[nestedKey];
                    }
                    return value;
                },
                ...(typeof state[key] === "object" && state[key] !== null
                    ? createUpdateState(state[key], sharedSubject, [...path, key])
                    : {}),
            };
        }
    });

    return updateState;
}
