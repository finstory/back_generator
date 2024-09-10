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
const newRedux = () => {
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
                local: true,
            }
        }
    };
    const reloadState = (path, payload) => __awaiter(void 0, void 0, void 0, function* () {
        const pathArr = path.split("_");
        let currentObj = state;
        for (let i = 0; i < pathArr.length - 1; i++) {
            const key = pathArr[i];
            if (typeof currentObj[key] !== 'object') {
                currentObj[key] = {};
            }
            currentObj = currentObj[key];
        }
        const key = pathArr[pathArr.length - 1];
        if (typeof currentObj[key] === 'object') {
            currentObj[key] = Object.assign(Object.assign({}, currentObj[key]), payload);
        }
        else {
            currentObj[key] = payload;
        }
    });
    //resultados esperados:
    reloadState("user_address_street", { number: "999", name: "heco" });
    reloadState("user_address_street_another", { exist: "facuuuuuuu" }); // { user: { id: 4, name: 'ivan', email: '', address: { street: 'cayambo', number: 123 } } }
    reloadState("user", { id: 2 }); // { user: { id: 4, name: 'ivan', email: '' } }
    // reloadState("user", { id: 2, name: "ivan", email: "fac@sdf.com" }); // { user: { id: 2, name: 'ivan', email: 'fac@sdf.com' } }
    // reloadState("user_id", "31923"); // { user: { id: '31923', name: 'test', email: '' } }
    // reloadState("user_name", "facu"); // { user: { id: '1', name: ' facu', email: '' } }
    console.log(JSON.stringify(state, null, 2));
};
exports.default = newRedux;
