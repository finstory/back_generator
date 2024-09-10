"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteModel = void 0;
class RouteModel {
    constructor({ id, endpointName, requestType, description, controllerName, middlewares, params, query, body, responseBody }) {
        this.id = id;
        this.endpointName = endpointName;
        this.requestType = requestType;
        this.controllerName = controllerName;
        this.description = description;
        this.validateActive = true;
        this.middlewares = middlewares || [];
        this.params = params || [];
        this.query = query || [];
        this.body = body || [];
        this.responseBody = responseBody || [];
    }
}
exports.RouteModel = RouteModel;
exports.default = RouteModel;
