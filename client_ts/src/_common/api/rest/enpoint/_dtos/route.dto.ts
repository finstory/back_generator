//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

export class BasicRouteDto {
    @V.IsNotEmpty()
    @V.IsString()
    @V.Length(1, 30)
    @V.Matches(/^\/.+/, { message: 'Endpoint must start with "/".' })
    endpointName: string;
    @V.IsNotEmpty()
    @V.IsIn(['get', 'post', 'delete', 'put', 'patch'], { message: 'Invalid request type.' })
    requestType: string;
}

export class RouteDto extends BasicRouteDto {
    @V.IsNotEmpty()
    @V.IsString()
    @V.Length(3, 30)
    controllerName: string;
}