export interface IModule {
    moduleName: string;
    routes: IRoute[];
}

interface IRoute {
    id: string;
    endpoint: string;
    method: string;
    description: string;
    controllerName: string;
    middlewares: string[];
    params?: RequestParams[];
    query?: RequestParams[];
    body?: RequestParams[];
    response_body?: RequestParams[];
}

interface RequestParams {
    key: string;
    type: string;
    elementType: string;
    optional: boolean;
    value: any;
}
