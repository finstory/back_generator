const newReduxTypes = () => {

    type User = {
        id: string;
        name: "facu" | "ivan" | "test";
        email: string;
        address: {
            street: {
                name: string;
                number: number;
                another: {
                    exist: boolean;
                };
            };
            local: boolean;
        };
    };
    type State = {
        user: User;
    };


    let state = {
        user: {
            id: "1",
            name: "test",
            email: "",
            address: {
                street: {
                    name: "cayambo",
                    number: 123,
                    another: { exist: true }
                },
                local: true
            }
        } as User
    };

    // type NestedKeys<T> = T extends object
    //     ? {
    //         [K in keyof T]:

    //         T[K] extends object ? [K, ...NestedKeys<T[K]>] : [K];

    //     }[keyof T] : any[];

    type NestedKeys<T> = T extends object
        ? {
            [K in keyof T]: T[K] extends object
            ? [K, ...NestedKeys<T[K]>] | [K] // Agregamos la posibilidad de incluir también solo [K] para caminos parciales
            : [K];
        }[keyof T]
        : never;


    // Utility type to make all properties optional
    type PartialRecursive<T> = {
        [P in keyof T]?: T[P] extends object ? PartialRecursive<T[P]> : T[P];
    };

    // Define a type to extract payload type based on path
    type PayloadForPath<T, Path extends any[]> =
        Path extends [infer Key, ...infer Rest]
        ? Key extends keyof T
        ? PayloadForPath<T[Key], Rest extends string[] ? Rest : []>
        : never
        : PartialRecursive<T>;

    // Helper type to extract possible keys for a given path
    type PossibleKeys<T, Path extends string[]> =
        Path extends [infer Key, ...infer Rest]
        ? Key extends keyof T
        ? PossibleKeys<T[Key], Rest extends string[] ? Rest : []>
        : never
        : keyof T;

    // Function to infer possible properties at a given path
    const getPossibleProperties = <T, Path extends string[]>(
        path: Path
    ): PossibleKeys<T, Path>[] => {
        // You would need to implement logic to determine possible properties
        // This is a placeholder for demonstration purposes
        return [] as PossibleKeys<T, Path>[];
    };

    // Function with inferred path
    const _setRoute = async <T extends object>(
        path: NestedKeys<T>,
        payload: PayloadForPath<T, NestedKeys<T>>
    ) => {
        // Implementation here
    };

    const array: NestedKeys<User> = ["address", "street", "another", "exist"];

    _setRoute<User>(["address", "local"], { another: { exist: true } });


    // type IsStringArray<T> = T extends string[] ? true : false;
    // type Test1 = IsStringArray<string>;
    // type ExcludeNullAndUndefined<T> = T extends null | undefined ? never : T;
    // const vard: ExcludeNullAndUndefined<string> = undefined;
    // Example usage
    // reloadStateViewTypes<User>(["address", "street"], { name: "new name" });


}
export default newReduxTypes;