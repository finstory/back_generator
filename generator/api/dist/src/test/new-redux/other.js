"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newReduxTypes = () => {
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
        }
    };
};
exports.default = newReduxTypes;
