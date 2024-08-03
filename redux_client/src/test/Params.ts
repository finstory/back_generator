//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';
import { UUID } from "crypto";

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

    @V.IsString()
    @V.IsNotEmpty()
    @V.Length(3, 10)
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


class User {

    id: UUID;
    name: string;

    constructor(id: UUID, name: string) {
        this.id = id;
        this.name = name;
    }

}