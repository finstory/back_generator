import { Request, Response } from "express";

//$ userGet_request

export interface usersGetReq
  extends Request<usersGet_params, {}, usersGet_body, usersGet_query> {}

type usersGet_params = {
  id: string;
};

type usersGet_query = {
  id_team: string;
  parametro2: number;
};

type usersGet_body = {
  team: {};
};

export interface usersGetRes
  extends Response<{
    id: string;
  }> {}

//$ END userGet_request
