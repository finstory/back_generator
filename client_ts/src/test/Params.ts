//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

class UserDto {
    @V.IsNumber()
    @V.IsNotEmpty()
    id: string;
    @V.IsString()
    name: string;
}

export class Params {
    // @V.IsNotEmpty()
    // @V.ValidateNested()
    // @Type(() => UserDto)
    // user: UserDto;

    @V.IsNotEmpty()
    @V.IsString()
    // @Transform(({ value }) => parseInt(value))
    name: string;
}
function TryCatch(target: Object, propertyName: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        try {
            return await originalMethod.apply(this, args);
        } catch (error) {
            console.log(error.message);
        }
    };

    return descriptor;
}

export class Ejemplo {

    @TryCatch
    async metodoArrow() {
        throw new Error("Error");
    }
}
