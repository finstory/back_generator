import { plainToClass, plainToClassFromExist } from "class-transformer";
import * as V from "class-validator";
import formatErrors, { ErrorFormat } from "./formatErrors";


const validateModule = async (BaseClass: any, objectToCompare: any) => {


    const baseClass = new BaseClass();

    Object.assign(baseClass, plainToClass(baseClass, objectToCompare));

    const checkParams = await V.validate(baseClass);


    if (checkParams.length > 0) {
        const formattedErrors: ErrorFormat[] = [
            ...formatErrors(checkParams, 'params'),

        ];

        console.log(formattedErrors);
    } else {
        console.log('Validation succeeded');

    }

}


export default validateModule;