import RequestParamsModel from "@/integrations/api-rest/endpoints/enpoint/_interfaces/_external/request-params-model";


export interface Route {
    controllerName: string;
    endpointName: string;
    requestType: string;
}


export interface BasicRoute extends Omit<Route, "controllerName"> { }


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