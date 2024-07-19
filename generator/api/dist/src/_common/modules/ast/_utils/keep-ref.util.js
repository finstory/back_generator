"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keepObjRef = keepObjRef;
exports.keepArrayRef = keepArrayRef;
function keepObjRef(obj, prop) {
    return {
        get: () => obj[prop],
        set: (newValue) => obj[prop] = newValue
    };
}
function keepArrayRef(array, index) {
    return {
        get: () => array[index],
        set: (newValue) => { array[index] = newValue; }
    };
}
