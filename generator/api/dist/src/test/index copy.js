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
const wordsManager_1 = require("../_common/helpers/wordsManager");
const testMain = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let state = {
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
        function setNewState(path, newValue) {
            const keys = path.split(".");
            state = setNewStateRecursively(state, keys, newValue);
        }
        function setNewStateRecursively(current, keys, newValue) {
            const [firstKey, ...restKeys] = keys;
            if (restKeys.length === 0) {
                return Object.assign(Object.assign({}, current), { [firstKey]: typeof newValue === 'object' && newValue !== null
                        ? Object.assign(Object.assign({}, current[firstKey]), newValue) : newValue });
            }
            return Object.assign(Object.assign({}, current), { [firstKey]: setNewStateRecursively(current[firstKey] || {}, restKeys, newValue) });
        }
        function createUpdateState(state, path = []) {
            const updateState = {};
            Object.keys(state).forEach((key) => {
                const fullPath = [...path, key].join(".");
                updateState[key] = Object.assign({ set: (newValue) => {
                        setNewState(fullPath, newValue);
                    } }, (typeof state[key] === "object" && state[key] !== null
                    ? createUpdateState(state[key], [...path, key])
                    : {}));
            });
            return updateState;
        }
        // Create the dynamic updateState object
        const updateState = createUpdateState(state);
        updateState.children.set({ name: "facu" });
        updateState.other.set({ say: "hello" });
        updateState.name.set("sds");
        updateState.children.lastName.set("alvarez");
        updateState.children.address.set({ street: "23423", number: 32 });
        updateState.children.address.oneMore.set({ myStreet: "23423" });
        console.log(state);
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
    }
    catch (error) {
        (0, wordsManager_1.printMsg)(error.message || "error", "error");
    }
});
exports.default = testMain;
