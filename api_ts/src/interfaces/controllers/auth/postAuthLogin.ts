import { Request, Response } from "express";
export interface Req extends Request<params, {}, body, query> {}
export interface Res extends Response<response_body> {}

//REQUEST TYPES:

type params = {
  names: number[];
  iuiui: string;
  key_32: string;
};

type query = {
  key_1: string;
};

type body = {
  other?: string;
};

type response_body = {
  other?: string;
};

//BODY TO SEND:

const body: body = {
  other: "hellos"
};