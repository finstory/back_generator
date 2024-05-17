import fs from 'fs';
import * as V from "class-validator";
import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { Transform, TransformFnParams, Type, plainToClass } from 'class-transformer';
import { isNumeric } from 'validator';
export interface Req extends Request<Params, {}, Body, Query> { }
export interface Res extends Response<ResponseBody> { }

//REQUEST TYPES:
class Params {

}

class Query {
  @V.IsNotEmpty()
  @V.IsAlpha()
  age: string;

  is_short: boolean;
};

class Street {
  @V.IsNotEmpty()
  @V.IsString()
  @V.IsAlpha()
  street: string;
}

class Address {
  @V.IsNotEmpty()
  @V.IsString()
  @V.IsAlpha()
  city: string;
}

class User {


  @V.IsNotEmpty()
  @V.ValidateNested()
  @Type(() => Street)
  street: Street;

  @V.IsString()
  @V.IsAlpha()
  user_name: string;

  @V.IsNotEmpty()
  @V.ValidateNested()
  @Type(() => Address)
  city: Address;
}
class AnotherUser {
  @V.IsString()
  @V.IsAlpha()
  name: string;
}


class Body {
  @V.ValidateNested()
  @Type(() => User)
  user: User[];

  @V.ValidateNested()
  @Type(() => AnotherUser)
  anotherUser: AnotherUser;
  @V.IsBoolean()
  isName: boolean;

};

class ResponseBody {

};

//BODY TO SEND:

const body: ResponseBody = {};


// function formatErrors(errors: V.ValidationError[]): any[] {
//   return errors.map(error => ({
//     property: error.property,
//     constraints: error.constraints,
//     children: error.children && error.children.length ? formatErrors(error.children) : undefined
//   }));
// }
function formatErrors(errors: V.ValidationError[]): any[] {
  const result = [];

  function traverse(errors: V.ValidationError[], path: (string | number)[] = []) {
    errors.forEach(error => {
      const currentPath = [...path];
      if (error.constraints) {
        result.push({
          from: currentPath.length > 0 ? currentPath : null,
          property: error.property,
          errors: error.constraints,
        });
      }
      if (error.children && error.children.length) {
        const errorProperty = isNumeric(error.property) ? Number(error.property) : error.property;
        traverse(error.children, [...currentPath, errorProperty]);
      }
    });
  }

  traverse(errors);
  return result;
}

export const validator = async (req: Req, res: Res, next: NextFunction) => {

  const params = new Params();
  const query = new Query();
  const body = new Body();

  // console.log(plainToClass(Query, req.query));

  Object.assign(params, plainToClass(Params, req.params));
  Object.assign(query, plainToClass(Query, req.query));
  Object.assign(body, plainToClass(Body, req.body));


  const checkParams = await V.validate(params);
  const checkQuery = await V.validate(query);
  const checkBody = await V.validate(body);

  const errors: { params: V.ValidationError[], query: V.ValidationError[], body: V.ValidationError[] }
    = {
    params: checkParams,
    query: checkQuery,
    body: checkBody
  };

  if (errors.params.length > 0 || errors.query.length > 0 || errors.body.length > 0) {
    const formattedErrors = {
      params: formatErrors(errors.params),
      query: formatErrors(errors.query),
      body: formatErrors(errors.body)
    };
  
  fs.writeFileSync('./errors.json', JSON.stringify(formattedErrors));
} else {
  console.log('Validation succeeded');
next();
  }

}
// console.log(checkBody);
// errorsList = { ...checkParams, ...checkQuery, ...checkBody };

// if (Object.keys(errorsList).length > 0) {
//   // console.log(errorsList);
//   res.status(400).json(errorsList);
// } else {
//   req.params = params;
//   req.query = query;
//   req.body = body;
//   next();
// }
// }

const checkErrors = async (objToCheck: any, result: object = {}) => {

  await V.validate(objToCheck).then((errors) => {
    result = { ...result, errors };
    // if (errors.length > 0) result = errors[0].constraints;
    if (errors.length > 0) {
      const errorsGetting = errors[0].constraints;

      // if (errors[0].children.length > 0)
      //   result = checkErrors(errors[0].children, errors[0].constraints, false)
    }
  });


  return result;
}