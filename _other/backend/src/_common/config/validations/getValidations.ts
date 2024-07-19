import { NextFunction, Request, Response } from "express";
import parametersValidator from ".";

const getValidations = (Controller: any, C: any) => {
 
    const validation = new Controller();

    Object.getOwnPropertyNames(validation).forEach((key) => {
        if (key !== "constructor" && typeof validation[key] === "function") {
            validation[key] = async (req: Request, res: Response, next: NextFunction) => {
                await parametersValidator(req, res, next, C[key].parameters);
            };
        }
    });

    return validation;
}

export default getValidations;