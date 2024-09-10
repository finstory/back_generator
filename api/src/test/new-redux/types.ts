const newReduxTypes = () => {

    interface User {
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
    }

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

    // Utility type to make all properties optional
    type PartialRecursive<T> = {
        [P in keyof T]?: T[P] extends object ? PartialRecursive<T[P]> : T[P];
    };

    // Define a type that extracts the payload type based on the path and makes properties optional
    type PayloadForPath<T, Path extends string> =
        Path extends `${infer Key}.${infer Rest}`
        ? Key extends keyof T
        ? PartialRecursive<PayloadForPath<T[Key], Rest>>
        : never
        : Path extends keyof T
        ? PartialRecursive<T[Path]>
        : never;

    // The function with dynamic typing for the payload and optional properties
    const reloadStateViewTypes = async <Path extends string>(path: Path, payload: PayloadForPath<typeof state, Path>) => {
        // Implementation here
    };

    reloadStateViewTypes(`user`, { name: "facu" });

}
export default newReduxTypes;