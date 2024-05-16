import { Request, Response } from "express";
import { UserDto } from "../../../dto/user.dto";
export interface Req extends Request<params, {}, body, query> { }
export interface Res extends Response<response_body> { }

//REQUEST TYPES:

type params = {};

type query = {};

type body = {
  name: string;
  user: UserDto;
};

type response_body = {};

//BODY TO SEND:

const example = ({ body, params }: Req) => {

}


// const body: body = {};