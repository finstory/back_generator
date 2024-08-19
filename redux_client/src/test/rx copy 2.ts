import { useEffect, useState } from "react";
import { BehaviorSubject, observable, Subject } from 'rxjs';

interface State {
    name: string;
    lastName: string;
    other: {
        say: string;
    };
    children: {
        name: string;
        lastName: string;
        address: {
            street: string;
            number: number;
            height: number;
            oneMore: {
                myStreet: string;
            }
        };
    };
};

let state: State = {
    name: "00facundo",
    lastName: "00garcia",
    other: {
        say: "00hello"
    },
    children: {
        name: "00facundo",
        lastName: "00garcia",
        address: {
            street: "00calle fals",
            number: 123000,
            height: 1.80000,
            oneMore: {
                myStreet: "000calle fals"
            }
        },
    },
};

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

function setNewState<P extends NestedKeys<State>>(
    path: P,
    newValue: PathValue<State, P>
): void {
    const keys = path.split(".");
    sharedSubject.next(setNewStateRecursively(sharedSubject.getValue(), keys, newValue));
}

function setNewStateRecursively(current: any, keys: string[], newValue: any): any {
    const [firstKey, ...restKeys] = keys;

    if (restKeys.length === 0) {
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

//%sdsd

type UpdateStateFunctions<T> = {
    [K in keyof T]: T[K] extends object
    ? UpdateStateFunctions<T[K]> & { set: (newValue: Partial<T[K]>) => void, get: () => T[K] }
    : { set: (newValue: T[K]) => void, get: () => T[K] };
};


function createUpdateState<T>(state: T, path: string[] = []): UpdateStateFunctions<T> {
    const updateState: any = {};

    Object.keys(state as object).forEach((key) => {
        const fullPath = [...path, key].join(".");

        updateState[key] = {
            set: (newValue: any) => {
                setNewState(fullPath as any, newValue);
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
                ? createUpdateState(state[key], [...path, key])
                : {}),
        };
    });

    return updateState;
}


const sharedSubject = new BehaviorSubject<State>(state);

const updateState = createUpdateState(state);
console.log(updateState.children.address.get())
updateState.children.address.set({ street: "22 fals", number: 2 })
console.log(updateState.children.address.get())
updateState.children.address.set({ street: "32 fals" })
console.log(updateState.children.address.get())

export const getObs = () => {
    return sharedSubject.getValue();
}

export const enviarDatos = (data: State) => {
    sharedSubject.next(data);
};

export class RXJS {
    private subject = new BehaviorSubject<State>(
        { name: "00facundo", lastName: "00garcia", other: { say: "00hello" }, children: { name: "00facundo", lastName: "00garcia", address: { street: "00calle fals", number: 123000, height: 1.80000, oneMore: { myStreet: "000calle fals" } } } });
    private subscription = this.subject.subscribe((data) => {
        console.log(data)
    });

    public getObs = () => {
        return this.subject.getValue();
    }

    public enviarDatos = (data: State) => {
        this.subject.next(data);
    };

    public unsubscribe = () => {
        this.subscription.unsubscribe();
    }
}

// export const rx = () => {

//     const [$obs, setObs] = useState<Msg>({ name: '', value: 0 });

//     useEffect(() => {
//         console.log("se detecto un cambio")
//         const subscription = sharedSubject.subscribe((data) => {
//             console.log(data)
//             setObs(data);
//         });
//         return () => {
//             subscription.unsubscribe();
//         }
//     }, [])


//     const enviarDatos = (data: Msg) => {
//         sharedSubject.next(data);
//     };

//     const getObs = () => {
//         return sharedSubject.getValue();
//     }

//     // subscription.unsubscribe();

//     return { $obs, enviarDatos, getObs };
// };
