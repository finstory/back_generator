"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.export_validation = exports.validation_barrel = exports.validation_model = void 0;
const convertToSnakeCase = (text) => {
    return text.replace(/([A-Z])/g, "-$1").toLowerCase();
};
const validation_model = () => {
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
};
exports.validation_model = validation_model;
const validation_barrel = () => {
    return `//<EXPORTS>
export default {};`;
};
exports.validation_barrel = validation_barrel;
const export_validation = (controllerName) => {
    return `export * as ${controllerName} from './${convertToSnakeCase(controllerName)}.validate';`;
};
exports.export_validation = export_validation;
