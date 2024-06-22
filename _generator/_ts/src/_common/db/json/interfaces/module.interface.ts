export interface IModule {
    name: string;
    routes: IRoute[];
}

export interface IRoute {
    id: string;
    endpointName: string;
    requestType: "get" | "post" | "put" | "delete" | "patch";
    description: string;
    controllerName: string;
    middlewares: string[];
    params?: RequestParams[];
    query?: RequestParams[];
    body?: RequestParams[];
    responseBody?: RequestParams[];
}

export interface RequestParams {
    key: string;
    type: string;
    elementType: string;
    optional: boolean;
    value: any;
}
