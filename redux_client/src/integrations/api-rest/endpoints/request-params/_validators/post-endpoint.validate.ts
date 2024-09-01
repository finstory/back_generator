//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Type } from 'class-transformer';
import { BasicRouteDto } from "../_dtos/route.dto";

export class PostEndpoint {
    @V.IsNotEmpty()
    @V.IsString()
    @V.Length(3, 30)
    moduleName: string;

    @V.IsNotEmpty()
    @V.ValidateNested()
    @Type(() => BasicRouteDto)
    route: BasicRouteDto;
}