//IMPORTS NEEDED:
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response } from "express";
import { Transform, Type } from 'class-transformer';
import { RouteExpressDto } from "@/_common/modules/ast/_dtos/ast-route-function.dto";
import { BasicRouteDto, BasicRouteDtoV2 } from "@/_common/db/dto/route.dto";

//<IMPORTS>

//<REQUEST TYPES>

class Params {
    routeId: string;
    moduleName: string;
};

class Query { };

class Body {
    moduleName: string;
    route: BasicRouteDtoV2;
};

type ResponseBody = string;

//BODY TO SEND:

const body = {} as Body;


//EXPORTS:
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }
export const parameters = { Params, Query, Body };