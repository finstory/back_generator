//IMPORTS NEEDED:
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response } from "express";
import { Transform, Type } from 'class-transformer';
import RouteModel from "@/_common/db/json/entities/route.model";
import { BasicRouteDto } from "../_dtos/route.dto";

//<IMPORTS>

//<REQUEST TYPES>

class Params { };

class Query { };

class Body {
    moduleName: string;
    route: BasicRouteDto;
};

type ResponseBody = string;

//BODY TO SEND:

const body = {} as Body;


//EXPORTS:
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }
export const parameters = { Params, Query, Body };