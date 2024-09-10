"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalRouteDto = exports.FragmentRouteDto = exports.OnlyRequestParamsRouteDto = exports.BasicRouteDto = exports.RouteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
class RouteDto {
}
exports.RouteDto = RouteDto;
class BasicRouteDto extends (0, mapped_types_1.PickType)(RouteDto, ["endpointName", "requestType"]) {
}
exports.BasicRouteDto = BasicRouteDto;
class OnlyRequestParamsRouteDto extends (0, mapped_types_1.PickType)(RouteDto, ["params", "query", "body", "responseBody"]) {
}
exports.OnlyRequestParamsRouteDto = OnlyRequestParamsRouteDto;
class FragmentRouteDto extends (0, mapped_types_1.PickType)(RouteDto, ["endpointName", "requestType", "controllerName", "validateActive", "description"]) {
}
exports.FragmentRouteDto = FragmentRouteDto;
class OptionalRouteDto extends (0, mapped_types_1.PartialType)(RouteDto) {
}
exports.OptionalRouteDto = OptionalRouteDto;
