import { Request, Response } from "express";
import { uuid, UUID } from "short-uuid";

export interface Req extends Request<params, {}, body, query> {}
export interface Res extends Response<response_body> {}



//REQUEST TYPES:

type params = {};

type query = {};

type body = {
  id?: UUID | string;
  first_name: string;
  password: string;
  age: number;
};

type response_body = {};

//BODY TO SEND:

const body: body = {
  id: "ER334WE",
  first_name: "facu",
  password: "2329Icx/",
  age: 32,
};
