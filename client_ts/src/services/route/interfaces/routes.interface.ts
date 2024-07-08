import RequestParamsModel from "@/_common/api/rest/_interfaces/_external/request-params-model";

export interface Route {
    endpointName: string;
    requestType: string;
    controllerName: string;

}

export interface NewRoute {
    endpointName?: string;
    controllerName?: string;
    requestType?: RequestType;
    description?: string;
    validateActive?: boolean;
    middlewares?: string[];
    params?: RequestParamsModel[];
    query?: RequestParamsModel[];
    body?: RequestParamsModel[];
    responseBody?: RequestParamsModel[];
}

export type RequestType = "get" | "post" | "put" | "delete" | "patch" | "options" | "head" | "connect" | "trace";