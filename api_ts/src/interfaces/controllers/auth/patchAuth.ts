import { Request, Response } from "express";
export interface Req extends Request<params, {}, body, query> {}
export interface Res extends Response<response_body> {}

interface User {}

//REQUEST TYPES:

type params = {
};

type query = {
  fern: some[];
};

type body = {
};

type response_body = {
};

//BODY TO SEND:

const body: body = {};