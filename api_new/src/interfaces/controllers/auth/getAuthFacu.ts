import { Request, Response } from "express";
export interface Req extends Request<params, {}, body, query> {}
export interface Res extends Response<response_body> {}

//REQUEST TYPES:

type params = {
//KEY
  email?: string;
//END
};

type query = {
//KEY
  name: string;
//KEY
  email?: User;
//KEY
  email: number;
//KEY
  email?: boolean;
//END
};

type body = {
//END
};

type response_body = {
//KEY
  facu?: User;
//END
};

//BODY TO SEND:

const body: body = {};
