"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    // Function to infer possible properties at a given path
    const getPossibleProperties = (path) => {
        // You would need to implement logic to determine possible properties
        // This is a placeholder for demonstration purposes
        return [];
    };
    // Function with inferred path
    const _setRoute = (path, payload) => __awaiter(void 0, void 0, void 0, function* () {
        // Implementation here
    });
    const array = ["address", "street", "another", "exist"];
    _setRoute(["address", "local"], { another: { exist: true } });
    // type IsStringArray<T> = T extends string[] ? true : false;
    // type Test1 = IsStringArray<string>;
    // type ExcludeNullAndUndefined<T> = T extends null | undefined ? never : T;
    // const vard: ExcludeNullAndUndefined<string> = undefined;
    // Example usage
    // reloadStateViewTypes<User>(["address", "street"], { name: "new name" });
};
exports.default = newReduxTypes;
