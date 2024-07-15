//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

import RequestParamsModel from "../_interfaces/_external/request-params-model";
import { RequestType } from "../_interfaces/_external/request-type.interface";
import { RouteDto } from "../_dtos/route.dto";


export class PatchEndpoint {

    @V.IsNotEmpty()
    @V.IsString()
    @V.Length(3, 30)
    moduleName: string;
    @V.IsNotEmpty()
    @V.ValidateNested()
    @Type(() => RouteDto)
    route: RouteDto;
    
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

