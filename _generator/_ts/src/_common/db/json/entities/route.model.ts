import RequestParamsModel from "./request-params.model";

class RouteModel {
    id: string;
    endpointName: string;
    requestType: "get" | "post" | "put" | "delete" | "patch";
    description: string;
    controllerName: string;
    middlewares: string[];
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