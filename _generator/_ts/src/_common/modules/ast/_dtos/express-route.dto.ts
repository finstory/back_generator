import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

//% MAIN DTO:

export class RouteExpressDto {


    @V.IsIn(["CallExpression", "MemberExpression"])
    type: "CallExpression" | "MemberExpression";
    
    callee: _Callee;
    arguments: _RouteArgument[];
    optional: false;
    range: [number, number];

}

//% CHILDREN ROUTE EXPRESS DTO:

class _Callee {
    type: "MemberExpression";
    object: _Callee__Object;
    property: _Callee__Property;
}

class _Callee__Object {
    type: "Identifier";
    name: "router";
    range: [number, number];
}

class _Callee__Property {
    type: "Identifier";
    name: "get" | "post" | "put" | "delete" | "patch" | "options" | "head" | "connect" | "trace";
    range: [number, number];
}


class _RouteArgument {
    type: "Literal" | "MemberExpression";
    value?: string;
    raw?: string;
    object?: _RouteArgument__Object;
    property?: _RouteArgument__Property;
    optional: false;
    range: [number, number];

}

class _RouteArgument__Object {
    type: "Identifier";
    name: "router";
    range: [number, number];
}

class _RouteArgument__Property {
    type: "Identifier";
    name: string;
    range: [number, number];
}



//% OTHERS DTO:

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