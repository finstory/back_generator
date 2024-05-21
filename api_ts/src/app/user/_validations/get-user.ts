//<IMPORTS>
import { User } from "../_dtos/user.dto";

//IMPORTS NEEDED:
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response } from "express";
import { Transform, Type } from 'class-transformer';

export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }
export { Params, Query, Body, ResponseBody };

//<REQUEST TYPES>

class Params { }

class Query {
  @V.IsNotEmpty()
  @V.IsNumberString()
  @Transform(({ value }) => parseInt(value))
  age: number;
  // @Transform(({ value }) => {
  //   switch (value) {
  //     case "true" || "True": return true;
  //     case "false" || "False": return false;
  //   }
  // })

  is_short: boolean;
};

class Body {
  @V.ValidateNested()
  @Type(() => User)
  user: User;

  @V.IsBoolean()
  isName: boolean;

};

class ResponseBody { };

//BODY TO SEND:

const body: ResponseBody = {};