import { Request, Response } from "express";
export interface Req extends Request<params, {}, body, query> {}
export interface Res extends Response<response_body> {}

//REQUEST TYPES:

type params = {
  id: string;
  last_name: string;
};

type query = {
  id_team: string;
  name: string;
};

type body = {
  team: {};
};

type response_body = {
  name: string;
  id: number;
};

//BODY TO SEND:

const body: body = {
  team: "",
};