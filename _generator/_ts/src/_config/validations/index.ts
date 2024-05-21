import { plainToClass, plainToClassFromExist } from "class-transformer";
import * as V from "class-validator";
import { NextFunction, Request, Response } from "express";
import formatErrors, { ErrorFormat } from "./formatErrors";
import errorsResponse, { ErrorResponse } from "./errorResponse";

const parametersValidator = async <P, Q, B, RB>(
    req: Request<P, any, B, Q>,
    res: Response<RB | ErrorResponse>,
    next: NextFunction,
    Params: { new(): P }, Query: { new(): Q }, Body: { new(): B }) => {

    const params = new Params();
    const query = new Query();
    const body = new Body();
    
    Object.assign(params, plainToClassFromExist(Params, req.params));
    Object.assign(query, plainToClassFromExist(Query, req.query));
    Object.assign(body, plainToClass(Body, req.body));
    
    const checkParams = await V.validate(params as { new(): P });
    const checkQuery = await V.validate(query as { new(): Q });
    const checkBody = await V.validate(body as { new(): B });
    
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