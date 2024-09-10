"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestParamsModel {
    constructor({ key, type, elementType, optional, value }) {
        this.key = key;
        this.type = type;
        this.elementType = elementType;
        this.optional = optional;
        this.value = value;
    }
}
exports.default = RequestParamsModel;
