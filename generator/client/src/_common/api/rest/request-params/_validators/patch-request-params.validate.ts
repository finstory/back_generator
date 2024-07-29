//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

export class PatchValidationReloadDto {

    @V.IsNotEmpty()
    @V.IsString()
    @V.Length(3, 30)
    moduleName: string;

    @V.IsNotEmpty()
    @V.IsString()
    @V.Length(3, 30)
    controllerName: string;
}

