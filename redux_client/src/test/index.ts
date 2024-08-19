import S from "@services";
import { printInfo, printMsg } from "@helpers/wordsManager";
import nameMain from "./new-redux/getName";

const testMain = async () => {

    try {

        type State = {
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
            state = setNewStateRecursively(state, keys, newValue);
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

        // Utility type to get the functions for updating state
        
        type UpdateStateFunctions<T> = {
            [K in keyof T]: T[K] extends object
            ? UpdateStateFunctions<T[K]> & { set: (newValue: Partial<T[K]>) => void, get: () => T[K] }
            : { set: (newValue: T[K]) => void, get: () => T[K] };
        };


        function createUpdateState<T>(state: T, path: string[] = []): UpdateStateFunctions<T> {
            const updateState: any = {};

            Object.keys(state).forEach((key) => {
                const fullPath = [...path, key].join(".");

                updateState[key] = {
                    set: (newValue: any) => {
                        setNewState(fullPath as any, newValue);
                    },
                    get: () => {
                        return state[key];
                    },
                    ...(typeof state[key] === "object" && state[key] !== null
                        ? createUpdateState(state[key], [...path, key])
                        : {}),
                };
            });

            return updateState;
        }

        function getNestedValue<T>(obj: T, path: string): any {
            return path.split('.').reduce((acc, part) => acc && acc[part], obj);
        }


        // Create the dynamic updateState object
        const updateState = createUpdateState(state);
        updateState.name.set("FACCU");
        console.log(state.name); // FACCU
        console.log(updateState.name.get()); // 00facundo

        // Define an object with a private variable to hold the value

        // const obj: any = {
        //     name: "facu"
        // };

        // const reDefine = (myObj: any) => {
        //     const otherObj: any = {};
        //     Object.keys(obj).forEach(key => {

        //         Object.defineProperty(otherObj, key, {
        //             set: (newValue: string) => {
        //                 console.log(`Setting 'name' to: ${newValue}`);
        //                 // You can perform additional logic here
        //                 obj[key] = newValue; // Internally store the value
        //             },
        //             enumerable: true,
        //             configurable: true
        //         });
        //     });
        //     return otherObj;
        // }

        // // Usage
        // console.log(obj.name);
        // const newObj = reDefine(obj);
        // newObj.name = "hello";
        // console.log(obj.name);


    } catch (error) {

        printMsg(error.message || "error", "error");
    }
};



export default testMain;
