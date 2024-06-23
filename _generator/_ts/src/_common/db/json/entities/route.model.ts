import RequestParamsModel from "./request-params.model";

export interface RouteModelEdition {
    id?: string;
    endpointName?: string;
    controllerName?: string;
    requestType?: "get" | "post" | "put" | "delete" | "patch";
    description?: string;
    // middlewares?: string[];
    // params?: RequestParamsModel[];
    // query?: RequestParamsModel[];
    // body?: RequestParamsModel[];
    // responseBody?: RequestParamsModel[];

}

class RouteModel {
    id: string;
    endpointName: string;
    controllerName: string;
    requestType: "get" | "post" | "put" | "delete" | "patch";
    description?: string;
    middlewares?: string[];
    params?: RequestParamsModel[];
    query?: RequestParamsModel[];
    body?: RequestParamsModel[];
    responseBody?: RequestParamsModel[];

    constructor({ id, endpointName, requestType, description, controllerName, middlewares, params, query, body, responseBody }) {
        this.id = id;
        this.endpointName = endpointName;
        this.requestType = requestType;
        this.description = description;
        this.controllerName = controllerName;
        this.middlewares = middlewares;
        this.params = params;
        this.query = query;
        this.body = body;
        this.responseBody = responseBody;
    }
}

export default RouteModel;