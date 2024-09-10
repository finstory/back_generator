"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModuleModel {
    constructor({ name, routes }) {
        this.name = name;
        this.routes = routes || [];
    }
}
exports.default = ModuleModel;
