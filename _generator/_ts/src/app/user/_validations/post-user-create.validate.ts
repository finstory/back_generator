import { Request, Response } from "express";
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }

//REQUEST TYPES:
class Params {
    id: string;
}

class Query {

};

class Body {

};

class ResponseBody {

};

//BODY TO SEND:

const body: ResponseBody = {};