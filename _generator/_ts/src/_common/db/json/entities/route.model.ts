import { RequestType } from "@/_common/interfaces/_index";
import RequestParamsModel from "./request-params.model";

export interface RouteModelEdition {
    endpointName?: string;
    controllerName?: string;
    requestType?: RequestType;
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
    requestType: RequestType;
    validateActive?: boolean;
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

export default RouteModel;