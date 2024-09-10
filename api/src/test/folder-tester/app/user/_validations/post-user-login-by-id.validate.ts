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
    userId: string;

    @V.IsString()
    @V.IsNotEmpty()
    @V.Length(1, 100)
    password: number[];

}

class Params {
};

class Query {
    @V.IsString()
    @V.IsNotEmpty()
    @V.Length(1, 100)
    userId?: string;


    user: UserDto;
};

class Body {
    @V.IsString()
    @V.IsNotEmpty()
    @V.Length(1, 100)
    userId: string;

    @V.IsBoolean()
    @V.IsNotEmpty()
    @V.IsBooleanString()
    passwordToken: { user: string, token: string };
};

class ResponseBody { };

//BODY TO SEND:

const body = {} as Body;


//<EXPORTS>:
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }
export const parameters = { Params, Query, Body };