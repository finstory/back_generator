//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response } from "express";
import { Transform, Type } from "class-transformer";

//<REQUEST TYPES>

class User {
    id: string;
    name: string;
}

class Params {
    @V.Length(0, 30)
    user: string;
}

class Query {
    @V.ValidateNested()
    @Type(() => User)
   @V.ValidateNested()
    @Type(() => User)
    user: User;
}

class Body {
    user: User;
}

class ResponseBody {}

//BODY TO SEND:

// const body = {} as Body;

const body: User = {
    id: "string",
    name: "string",
};

//<EXPORTS>:
export interface Req
    extends Request<Params, {}, Body, Query> {}
export interface Res
    extends Response<ResponseBody> {}
export const parameters = { Params, Query, Body };
