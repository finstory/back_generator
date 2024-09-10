const convertToSnakeCase = (text: string): string => {
    return text.replace(/([A-Z])/g, "-$1").toLowerCase();
}

export const validation_model = (): string => {
    return `//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response } from "express";
import { Transform, Type } from 'class-transformer';


//<REQUEST TYPES>

class Params { };

class Query { };

class Body { };

class ResponseBody { };

//BODY TO SEND:

const body = {} as Body;


//<EXPORTS>:
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }
export const parameters = { Params, Query, Body };`;
}

export const validation_barrel = (): string => {
    return `//<EXPORTS>
export default {};`
}

export const export_validation = (controllerName: string): string => {
    return `export * as ${controllerName} from './${convertToSnakeCase(controllerName)}.validate';`
}