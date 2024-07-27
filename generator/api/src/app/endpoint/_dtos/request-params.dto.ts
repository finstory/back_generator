import RequestParamsModel from "@/_common/db/json/entities/request-params.model";
import { Pos } from "@/_common/interfaces/_index";
import { ValidatorOptionDto } from "@/app/validation/_dtos/validation-fn.dto";
import { PickType, OmitType, PartialType } from '@nestjs/mapped-types';


export class RequestParamsDto implements RequestParamsModel {
    from: "params" | "query" | "body" | "response_body";
    name: string;
    type: string;
    typePosition?: Pos;
    containType: string;
    optional: boolean;
    value: any;
    validations?: ValidatorOptionDto[];
}

export class BasicRequestParamsDto extends
    PickType(RequestParamsDto,
        ['from', 'name', 'type']
    ) { }