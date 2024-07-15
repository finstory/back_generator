import { plainToClass, plainToClassFromExist } from "class-transformer";
import * as V from "class-validator";
import { NextFunction, Request, Response } from "express";
import formatErrors, { ErrorFormat } from "./formatErrors";
import errorsResponse, { ErrorResponse } from "./errorResponse";

interface Parameters {
    Params: any;
    Query: any;
    Body: any;
}

const parametersValidator = async (req: any, res: any, next: NextFunction, parameters?: Parameters) => {
    const { Params, Query, Body } = parameters;

    let myReq: Request<typeof Params, {}, typeof Body, typeof Query>;
    const params = new Params();
    const query = new Query();
    const body = new Body();

    Object.assign(params, plainToClassFromExist(Params, req.params));
    Object.assign(query, plainToClassFromExist(Query, req.query));
    Object.assign(body, plainToClass(Body, req.body));

    const checkParams = await V.validate(params);
    const checkQuery = await V.validate(query);
    const checkBody = await V.validate(body);

    Object.assign(params, plainToClass(Params, req.params));
    Object.assign(query, plainToClass(Query, req.query));

    if (checkParams.length > 0 || checkQuery.length > 0 || checkBody.length > 0) {
        const formattedErrors: ErrorFormat[] = [
            ...formatErrors(checkParams, 'params'),
            ...formatErrors(checkQuery, 'query'),
            ...formatErrors(checkBody, 'body'),
        ];


        errorsResponse(res, formattedErrors);
    } else {
        console.log('Validation succeeded');
        req.params = params;
        req.query = query;
        req.body = body;
        next();
    }

}


export default parametersValidator;