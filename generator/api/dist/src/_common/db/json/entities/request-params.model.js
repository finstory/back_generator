"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestParamsModel {
    constructor(name, type, containType, optional, value, validations) {
        this.name = name;
        this.type = type;
        this.containType = containType;
        this.optional = optional;
        this.value = value;
        this.validations = validations;
    }
}
exports.default = RequestParamsModel;
