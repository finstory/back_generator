//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response } from "express";
import { Transform, Type } from 'class-transformer';


//<REQUEST TYPES>

class UserDto {
    @V.IsString()
    @V.IsNotEmpty()
    @V.Length(1, 100)
    name: string;

    @V.IsString()
    @V.IsNotEmpty()
    @V.Length(1, 100)
    email?: string;

}

class Params {
    // @V.IsString()
    // @V.IsNotEmpty()
    // @V.Length(1, 100)
    moduleName?: string;

    @V.IsNotEmpty()
    @V.ValidateNested()
    @Type(() => UserDto)
    user: UserDto;

};

class Query {
    @V.IsNumber()
    @V.IsNotEmpty()
    // @V.Length(1, 100)
    age?: number;
};

class Body { };

class ResponseBody { };

//BODY TO SEND:

const body = {} as Body;


//<EXPORTS>:
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }
export const parameters = { Params, Query, Body };