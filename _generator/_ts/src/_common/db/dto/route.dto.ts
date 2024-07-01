import { RequestType } from "@/_common/interfaces/_index";
import RequestParamsModel from "../json/entities/request-params.model";

export class BasicRouteDto {
    endpointName: string;
    requestType: RequestType;
}

export class BasicRouteDtoV2 extends BasicRouteDto {
    controllerName: string;
}

export class RouteEditionDto {
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