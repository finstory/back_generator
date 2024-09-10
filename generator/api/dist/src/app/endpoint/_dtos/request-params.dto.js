"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicRequestParamsDto = exports.RequestParamsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
class RequestParamsDto {
}
exports.RequestParamsDto = RequestParamsDto;
class BasicRequestParamsDto extends (0, mapped_types_1.PickType)(RequestParamsDto, ['from', 'name', 'type']) {
}
exports.BasicRequestParamsDto = BasicRequestParamsDto;
