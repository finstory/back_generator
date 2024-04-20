import { Request, Response } from "express";
  export interface Req extends Request<params, {}, body, query> {}
  export interface Res extends Response<response_body> {}
  
  //REQUEST TYPES:
  
  type params = {
    //END
  };
  
  type query = {
    //END
  };
  
  type body = {
    //END
  };
  
  type response_body = {
    //END
  };
  
  //BODY TO SEND:
  
  const body: body = {
  };