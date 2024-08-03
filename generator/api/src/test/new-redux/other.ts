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




    _setRoute<User>((user: User) => {
        user.name = "facu";
    });



}
export default newReduxTypes;