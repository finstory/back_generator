//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

export class PostModuleDto {
    @V.MinLength(2)
    @V.MaxLength(25)
    @V.IsString()
    @V.IsNotEmpty()
    moduleName: string;
}