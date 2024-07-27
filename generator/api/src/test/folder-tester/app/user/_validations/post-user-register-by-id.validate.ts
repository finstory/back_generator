//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response } from "express";
import { Transform, Type } from 'class-transformer';
// import { UserDto } from "../_dtos/user.dto";


//<REQUEST TYPES>

class Params {
    @V.IsString()
    @V.IsNotEmpty()
    id: string;

    @V.IsString()
    @V.IsNotEmpty()
    name: string;
};

class Query { };

class Body {

    @V.IsNotEmpty()
    @V.ValidateNested()
    user: UserDto;
};

class UserDto {
    @V.IsString()
    @V.IsAlpha()
    user_name: string;
}

class ResponseBody { };

//BODY TO SEND:

const body = {} as Body;


//<EXPORTS>:
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }
export const parameters = { Params, Query, Body };