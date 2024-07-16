//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

export class PostModuleDto {
    @V.Matches(/^[A-Za-z_-][A-Za-z0-9_-]*$/, { message: "Invalid 'module name', only letters, numbers and it not must start with number." })
    @V.MinLength(2)
    @V.MaxLength(25)
    @V.IsString()
    @V.IsNotEmpty()
    moduleName: string;
}