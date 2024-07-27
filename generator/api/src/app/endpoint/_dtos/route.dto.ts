import { RequestType } from "@/_common/interfaces/_index";
import { RequestParamsDto } from "./request-params.dto";
import RouteModel from "@/_common/db/json/entities/route.model";
import { PickType, OmitType, PartialType } from "@nestjs/mapped-types";
import { controller } from "../endpoint.controller";

export class RouteDto implements RouteModel {
    id: string;
    endpointName: string;
    controllerName: string;
    requestType: "get" | "post" | "put" | "delete" | "patch" | "options" | "head" | "connect" | "trace";
    validateActive: boolean;
    description?: string;
    middlewares?: string[];
    params?: RequestParamsDto[];
    query?: RequestParamsDto[];
    body?: RequestParamsDto[];
    responseBody?: RequestParamsDto[];
}

export class BasicRouteDto extends PickType(RouteDto,
    ["endpointName", "requestType"]) { }

export class FragmentRouteDto extends PickType(RouteDto,
    ["endpointName", "requestType", "controllerName", "validateActive"]) {}
export class OptionalRouteDto extends PartialType(RouteDto) { }