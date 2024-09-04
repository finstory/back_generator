import { NextFunction, Request, Response } from "express";
import parametersValidator from ".";

const getValidations = <T>(Controller: any, C: any): keyof T => {

    const validation: T = new Controller();

    Object.getOwnPropertyNames(validation).forEach((key) => {
        if (key !== "constructor" && typeof validation[key] === "function") {
            validation[key] = async (req: Request, res: Response, next: NextFunction) => {
                await parametersValidator(req, res, next, C[key].parameters);
            };
        }
    });

    return validation as keyof T;
}

export default getValidations;