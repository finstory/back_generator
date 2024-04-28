import { Request, Response } from "express";
export interface Req extends Request<params, {}, body, query> {}
export interface Res extends Response<response_body> {}

interface User {
  id: number;
}

//REQUEST TYPES:

type params = {
  id: number;
  get: string;
  user: string;
  hello: string[];
};

type query = {
};

type body = {
};

type response_body = {
};

//BODY TO SEND:
const body: body = {};