//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response } from "express";
import { Transform, Type } from 'class-transformer';


//<REQUEST TYPES>

class Params {
 };

class Query { };

class Body { };

class ResponseBody { };

//BODY TO SEND:

const body = {} as Body;


//<EXPORTS>:
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }
export const parameters = { Params, Query, Body };