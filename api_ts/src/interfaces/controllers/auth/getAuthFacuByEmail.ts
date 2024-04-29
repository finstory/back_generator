import { Request, Response } from "express";
  export interface Req extends Request<params, {}, body, query> {}
  export interface Res extends Response<response_body> {}
  
  //REQUEST TYPES:
  
  type params = {};
  
  type query = {};
  
  type body = {};
  
  type response_body = {};
  
  //BODY TO SEND:
  
  const body: body = {};