//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

import RequestParamsModel from "../_interfaces/_external/request-params-model";
import { RequestType } from "../_interfaces/_external/request-type.interface";

export class PostEndpointDto {
    moduleName: string;
    route: {
        endpointName: string;
        requestType: string;
    };
}

export class PatchEndpointDto {

    moduleName: string;
    route: {
        endpointName: string;
        requestType: string;
        controllerName: string;
    };
    newRoute: {
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
}

export class DeleteEndpointDto {
    moduleName: string;
    route: {
        endpointName: string;
        requestType: string;
        controllerName: string;
    }
}
