import { Request, Response } from "express";
export interface Req extends Request<params, {}, body, query> {}
export interface Res extends Response<response_body> {}

//REQUEST TYPES:

interface User {
  name: string;
  id: number;
}

type params = {
  //KEY
  pepe?: string;
  //KEY
  look: User;
  //END
};

type query = {
  //KEY
  name: string;
  //KEY
  email?: User;
  //END
};

type body = {
  //KEY
  myUser: User;
  //END
};

type response_body = {
  //END
};

//BODY TO SEND:

const body: body = {
  team: "",
};
