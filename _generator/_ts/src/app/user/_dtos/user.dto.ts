import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

//% MAIN DTO:

//% CHILDREN DTO:
export class Street {
    @V.IsNotEmpty()
    @V.IsString()
    @V.IsAlpha()
    street: string;
}

export class Address {
    @V.IsNotEmpty()
    @V.IsString()
    @V.IsAlpha()
    city: string;
}

export class User {

    @V.IsNotEmpty()
    @V.ValidateNested()
    @Type(() => Street)
    street: Street;



    @V.IsString()
    @V.IsAlpha()
    user_name: string;

    @V.IsNotEmpty()
    @V.ValidateNested()
    @Type(() => Address)

    city: Address;
}