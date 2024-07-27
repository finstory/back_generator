import { RequestType } from "@interfaces";

export class RouteExpressDto {
    endpointName: string;
    requestType: string;
}

export class RouteExpressDtoV1 extends RouteExpressDto {
    validateActive: boolean;
}

export class RouteExpressDtoV2 extends RouteExpressDto {
    controllerName?: string;
    validateActive?: boolean;
}