//IMPORTS NEEDED:
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response } from "express";
import { Transform, Type } from 'class-transformer';

//<IMPORTS>

//<REQUEST TYPES>


class Params {

}

class Query {
};

class Body {
  // @V.MinLength(3)
  // @V.MaxLength(25)
  // @V.IsString()
  // @V.IsNotEmpty()
  // moduleName: string;
};

class ResponseBody { };

//BODY TO SEND:

const body: ResponseBody = {};


//EXPORTS:
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }
export const parameters = { Params, Query, Body };