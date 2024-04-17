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
  id?: string;
  //KEY
  user: User;
  //END
};

type query = {
  //KEY
  id_team: string;
  //KEY
  name: string;
  //END
};

type body = {
  //KEY
  team: object;
  //END
};

type response_body = {
  //KEY
  name: string;
  //KEY
  id: number;
  //END
};

//BODY TO SEND:

const body: body = {
  team: "",
};
