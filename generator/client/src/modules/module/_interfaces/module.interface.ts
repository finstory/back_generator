export interface IModule {
    name: string;
    routes: IRoute[];
}

export interface IRoute {
    id: string;
    endpointName: string;
    controllerName: string;
    requestType: "get" | "post" | "put" | "delete" | "patch";
    validateActive: boolean;
    description?: string;
    middlewares?: string[];
    params?: IRequestParams[];
    query?: IRequestParams[];
    body?: IRequestParams[];
    responseBody?: IRequestParams[];
}

export interface IRequestParams {
    name: string;
    type: string;
    optional: boolean;
    containType?: string;
    value?: any;
    validations?: IValidation[];

}

export interface IValidation {
    name: string;
    decoratorType: "ClassValidator" | "TransformValidator" | "TypeValidator";
    message?: string;
    callBack?: string;
}