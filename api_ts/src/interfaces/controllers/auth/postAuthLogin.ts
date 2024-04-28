import { Request, Response } from "express";
export interface Req extends Request<params, {}, body, query> {}
export interface Res extends Response<response_body> {}

//REQUEST TYPES:

type params = {
  names: number[];
};

type query = {};

type body = {
  other?: string;
};

type response_body = {
  other?: string;
};

//BODY TO SEND:

const body: body = {
  other: "hellos",
};
